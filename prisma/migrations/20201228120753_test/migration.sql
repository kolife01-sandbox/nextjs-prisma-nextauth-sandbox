-- CreateTable
CREATE TABLE "Todo" (
"id" SERIAL,
    "body" TEXT NOT NULL,
    "tttle" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD FOREIGN KEY("userId")REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
