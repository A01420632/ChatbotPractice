import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateChatResponse } from "~/server/services/geminiService";

export const chatbotRouter = createTRPCRouter({
  sendChatMessage: publicProcedure
    .input(
      z.object({
        content: z.string(),
        userEmail: z.string(),
        threadId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Save user message
      const userMessage = await ctx.db.chatMessage.create({
        data: {
          content: input.content,
          senderType: "USER",
          userEmail: input.userEmail,
          threadId: input.threadId,
        },
      });

      // Generate AI response using Gemini
      const aiResponse = await generateChatResponse(input.content);

      // Save AI response
      const systemMessage = await ctx.db.chatMessage.create({
        data: {
          content: aiResponse,
          senderType: "SYSTEM",
          userEmail: input.userEmail,
          threadId: input.threadId,
        },
      });

      return { 
        userMessageId: userMessage.id,
        systemMessageId: systemMessage.id,
        response: aiResponse,
      };
    }),

  sendWelcomeMessage: publicProcedure
    .input(
      z.object({
        userName: z.string(),
        userEmail: z.string(),
        threadId: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const chatMessage = await ctx.db.chatMessage.create({
        data: {
          content: `Gracias por contactarnos, ${input.userName}. ¿Cómo puedo ayudarte?`,
          senderType: "SYSTEM",
          userEmail: input.userEmail,
          threadId: input.threadId,
        },
      });
      return { id: chatMessage.id };
    }),

  getThreadMessages: publicProcedure
    .input(
      z.object({
        threadId: z.string(),
        userEmail: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const messages = await ctx.db.chatMessage.findMany({
        where: {
          threadId: input.threadId,
          userEmail: input.userEmail,
        },
        orderBy: {
          createdAt: "asc",
        },
      });

      return messages;
    }),
});
