import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";

const prisma = new PrismaClient();

async function main() {
  const token = "demo-token-" + nanoid(16);
  
  const widgetToken = await prisma.chatWidgetToken.create({
    data: {
      token: token,
      allowedDomain: "localhost",
    },
  });

  console.log("✅ Token created successfully!");
  console.log("Token:", widgetToken.token);
  console.log("Domain:", widgetToken.allowedDomain);
  console.log("\nAdd this to your demo page:");
  console.log(`<ChatWidget token="${widgetToken.token}" domain="localhost" />`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
