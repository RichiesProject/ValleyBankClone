import { storage } from "./storage";
import bcrypt from "bcryptjs";

export async function seedDatabase() {
  try {
    // Check if user already exists
    const existingUser = await storage.getUserByEmail("cwynn726@outlook.com");
    if (existingUser) {
      console.log("User already exists, skipping seed");
      return;
    }

    // Create user
    const hashedPassword = await bcrypt.hash("Richie2025", 10);
    const user = await storage.createUser({
      email: "cwynn726@outlook.com",
      password: hashedPassword,
      firstName: "Charles",
      lastName: "Wynn",
    });

    console.log("Created user:", user.email);

    // Create checking account
    const checkingAccount = await storage.createAccount({
      userId: user.id,
      accountNumber: "****1234",
      accountType: "checking",
      accountName: "Premier Checking",
      balance: "5247.82",
      availableBalance: "5247.82",
    });

    // Create savings account
    const savingsAccount = await storage.createAccount({
      userId: user.id,
      accountNumber: "****5678",
      accountType: "savings",
      accountName: "High Yield Savings",
      balance: "12875.45",
      availableBalance: "12875.45",
    });

    // Create credit account
    const creditAccount = await storage.createAccount({
      userId: user.id,
      accountNumber: "****9012",
      accountType: "credit",
      accountName: "Platinum Credit Card",
      balance: "-842.19",
      availableBalance: "4157.81", // Available credit = 5000 - 842.19
    });

    // Create business checking account
    const businessCheckingAccount = await storage.createAccount({
      userId: user.id,
      accountNumber: "****3456",
      accountType: "business_checking",
      accountName: "Business Premier Checking",
      balance: "28540.67",
      availableBalance: "28540.67",
    });

    // Create business savings account
    const businessSavingsAccount = await storage.createAccount({
      userId: user.id,
      accountNumber: "****7890",
      accountType: "business_savings",
      accountName: "Business Money Market",
      balance: "67250.00",
      availableBalance: "67250.00",
    });

    // Create business credit line
    const businessCreditAccount = await storage.createAccount({
      userId: user.id,
      accountNumber: "****2468",
      accountType: "business_credit",
      accountName: "Business Line of Credit",
      balance: "-5650.00",
      availableBalance: "44350.00", // Available credit = 50000 - 5650
    });

    console.log("Created accounts:", [
      checkingAccount.accountName, 
      savingsAccount.accountName, 
      creditAccount.accountName,
      businessCheckingAccount.accountName,
      businessSavingsAccount.accountName,
      businessCreditAccount.accountName
    ]);

    // Create sample transactions for checking account
    const checkingTransactions = [
      {
        accountId: checkingAccount.id,
        type: "credit",
        amount: "2500.00",
        description: "Direct Deposit - Salary",
        merchant: "ACME Corporation",
        category: "Income",
        status: "completed",
      },
      {
        accountId: checkingAccount.id,
        type: "debit",
        amount: "1200.00",
        description: "Rent Payment",
        merchant: "Property Management Co",
        category: "Housing",
        status: "completed",
      },
      {
        accountId: checkingAccount.id,
        type: "debit",
        amount: "85.43",
        description: "Grocery Shopping",
        merchant: "Whole Foods Market",
        category: "Groceries",
        status: "completed",
      },
      {
        accountId: checkingAccount.id,
        type: "debit",
        amount: "45.99",
        description: "Gas Station",
        merchant: "Shell",
        category: "Transportation",
        status: "completed",
      },
      {
        accountId: checkingAccount.id,
        type: "credit",
        amount: "150.00",
        description: "Refund",
        merchant: "Amazon",
        category: "Refund",
        status: "completed",
      },
    ];

    for (const tx of checkingTransactions) {
      await storage.createTransaction(tx);
    }

    // Create sample transactions for credit card
    const creditTransactions = [
      {
        accountId: creditAccount.id,
        type: "debit",
        amount: "89.99",
        description: "Online Purchase",
        merchant: "Best Buy",
        category: "Electronics",
        status: "completed",
      },
      {
        accountId: creditAccount.id,
        type: "debit",
        amount: "156.78",
        description: "Restaurant",
        merchant: "Fine Dining Restaurant",
        category: "Dining",
        status: "completed",
      },
      {
        accountId: creditAccount.id,
        type: "credit",
        amount: "200.00",
        description: "Payment - Thank You",
        merchant: "Online Payment",
        category: "Payment",
        status: "completed",
      },
    ];

    for (const tx of creditTransactions) {
      await storage.createTransaction(tx);
    }

    console.log("Created sample transactions");
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}