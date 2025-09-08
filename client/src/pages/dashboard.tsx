import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Building,
  Settings,
  LogOut,
  Send,
  Plus,
  Eye,
  Camera,
  Receipt,
  User
} from 'lucide-react';
import { useState } from 'react';

interface Account {
  id: string;
  accountNumber: string;
  accountType: string;
  accountName: string;
  balance: string;
  availableBalance: string;
}

interface Transaction {
  id: string;
  type: string;
  amount: string;
  description: string;
  merchant?: string;
  category?: string;
  status: string;
  date: string;
}

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [isTransferOpen, setIsTransferOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isPayBillsOpen, setIsPayBillsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAccountDetailOpen, setIsAccountDetailOpen] = useState(false);
  const { toast } = useToast();

  const { data: accountsData } = useQuery({
    queryKey: ['/api/accounts'],
  });

  const { data: transactionsData } = useQuery({
    queryKey: ['/api/transactions'],
  });

  const accounts = accountsData?.accounts || [];
  const transactions = transactionsData?.transactions || [];

  const formatCurrency = (amount: string) => {
    const num = parseFloat(amount);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(num);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getAccountTypeIcon = (type: string) => {
    switch (type) {
      case 'checking':
        return <CreditCard className="h-5 w-5 text-blue-600" />;
      case 'savings':
        return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'credit':
        return <CreditCard className="h-5 w-5 text-purple-600" />;
      case 'business_checking':
        return <Building className="h-5 w-5 text-slate-600" />;
      case 'business_savings':
        return <Building className="h-5 w-5 text-emerald-600" />;
      case 'business_credit':
        return <Building className="h-5 w-5 text-orange-600" />;
      default:
        return <DollarSign className="h-5 w-5" />;
    }
  };

  const getTransactionIcon = (type: string) => {
    return type === 'credit' ? (
      <ArrowUpRight className="h-4 w-4 text-green-600" />
    ) : (
      <ArrowDownRight className="h-4 w-4 text-red-600" />
    );
  };

  const totalBalance = accounts.reduce((sum, account) => {
    return sum + parseFloat(account.balance);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/67d1faccda1c4e43dbff3d30_WVBK25Years_WebsiteHeader3-p-500.png"
                alt="Willamette Valley Bank"
                className="h-8"
              />
              <h1 className="text-xl font-semibold">Online Banking</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Welcome, {user?.firstName}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => logout()}
                className="text-white hover:text-gray-200"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}!
          </h2>
          <p className="text-gray-600">Here's what's happening with your accounts today.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Dialog open={isTransferOpen} onOpenChange={setIsTransferOpen}>
            <DialogTrigger asChild>
              <Button 
                className="flex items-center justify-center h-20 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold text-base"
                data-testid="button-transfer"
              >
                <Send className="h-6 w-6 mr-3" />
                Transfer Money
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Transfer Money</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="from-account">From Account</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.filter(a => a.accountType !== 'credit' && !a.accountType.includes('credit')).map(account => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.accountName} - {account.accountNumber}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="to-account">To Account</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.map(account => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.accountName} - {account.accountNumber}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" placeholder="$0.00" step="0.01" />
                </div>
                <div>
                  <Label htmlFor="memo">Memo (Optional)</Label>
                  <Input id="memo" placeholder="What's this transfer for?" />
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    toast({ title: 'Transfer Initiated', description: 'Your transfer has been processed successfully' });
                    setIsTransferOpen(false);
                  }}
                >
                  Transfer Now
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isDepositOpen} onOpenChange={setIsDepositOpen}>
            <DialogTrigger asChild>
              <Button 
                className="flex items-center justify-center h-20 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold text-base"
                data-testid="button-deposit"
              >
                <Plus className="h-6 w-6 mr-3" />
                Deposit Check
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Mobile Check Deposit</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="deposit-account">Deposit To</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.filter(a => a.accountType === 'checking' || a.accountType === 'business_checking' || a.accountType === 'savings' || a.accountType === 'business_savings').map(account => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.accountName} - {account.accountNumber}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="check-amount">Check Amount</Label>
                  <Input id="check-amount" type="number" placeholder="$0.00" step="0.01" />
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-2">Take photos of your check</p>
                  <p className="text-sm text-gray-500">Front and back required</p>
                  <Button variant="outline" className="mt-4">
                    <Camera className="h-4 w-4 mr-2" />
                    Capture Check Images
                  </Button>
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    toast({ title: 'Check Deposited', description: 'Your check deposit has been submitted for processing' });
                    setIsDepositOpen(false);
                  }}
                >
                  Submit Deposit
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isPayBillsOpen} onOpenChange={setIsPayBillsOpen}>
            <DialogTrigger asChild>
              <Button 
                className="flex items-center justify-center h-20 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold text-base"
                data-testid="button-pay-bills"
              >
                <Receipt className="h-6 w-6 mr-3" />
                Pay Bills
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Pay Bills</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="payee">Payee</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select or add payee" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electric">City Electric Company</SelectItem>
                      <SelectItem value="gas">Northwest Natural Gas</SelectItem>
                      <SelectItem value="phone">Verizon Wireless</SelectItem>
                      <SelectItem value="credit">Chase Credit Card</SelectItem>
                      <SelectItem value="mortgage">Wells Fargo Mortgage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="payment-account">Pay From</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account" />
                    </SelectTrigger>
                    <SelectContent>
                      {accounts.filter(a => a.accountType === 'checking' || a.accountType === 'business_checking').map(account => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.accountName} - {account.accountNumber}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="payment-amount">Amount</Label>
                  <Input id="payment-amount" type="number" placeholder="$0.00" step="0.01" />
                </div>
                <div>
                  <Label htmlFor="payment-date">Payment Date</Label>
                  <Input id="payment-date" type="date" />
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    toast({ title: 'Payment Scheduled', description: 'Your bill payment has been scheduled successfully' });
                    setIsPayBillsOpen(false);
                  }}
                >
                  Schedule Payment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
            <DialogTrigger asChild>
              <Button 
                className="flex items-center justify-center h-20 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold text-base"
                data-testid="button-settings"
              >
                <Settings className="h-6 w-6 mr-3" />
                Account Settings
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Account Settings</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Profile Information</h4>
                  <div>
                    <Label htmlFor="settings-email">Email</Label>
                    <Input id="settings-email" value={user?.firstName + ' ' + user?.lastName} disabled />
                  </div>
                  <div>
                    <Label htmlFor="settings-phone">Phone Number</Label>
                    <Input id="settings-phone" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <Separator />
                <div className="space-y-3">
                  <h4 className="font-medium">Security</h4>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Two-Factor Authentication
                  </Button>
                </div>
                <Separator />
                <div className="space-y-3">
                  <h4 className="font-medium">Preferences</h4>
                  <Button variant="outline" className="w-full justify-start">
                    Notification Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Statement Preferences
                  </Button>
                </div>
                <Button 
                  className="w-full" 
                  onClick={() => {
                    toast({ title: 'Settings Updated', description: 'Your account settings have been saved' });
                    setIsSettingsOpen(false);
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Accounts Overview */}
          <div className="lg:col-span-2">
            {/* Personal Accounts */}
            <Card className="mb-6">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center text-slate-800">
                  <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Accounts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {accounts.filter(account => !account.accountType.startsWith('business')).map((account) => (
                    <div 
                      key={account.id}
                      className="p-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
                      onClick={() => {
                        setSelectedAccount(account.id);
                        setIsAccountDetailOpen(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-white shadow-sm border group-hover:shadow-md transition-shadow">
                            {getAccountTypeIcon(account.accountType)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">
                              {account.accountName}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {account.accountNumber}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">
                            {formatCurrency(account.balance)}
                          </p>
                          {(account.accountType === 'credit' || account.accountType === 'business_credit') && (
                            <p className="text-sm text-green-600 font-medium">
                              Available: {formatCurrency(account.availableBalance)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Business Accounts */}
            {accounts.some(account => account.accountType.startsWith('business')) && (
              <Card>
                <CardHeader className="bg-gradient-to-r from-slate-50 to-gray-50">
                  <CardTitle className="flex items-center text-slate-800">
                    <Building className="h-5 w-5 mr-2 text-slate-600" />
                    Business Accounts
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {accounts.filter(account => account.accountType.startsWith('business')).map((account) => (
                      <div 
                        key={account.id}
                        className="p-6 hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
                        onClick={() => {
                        setSelectedAccount(account.id);
                        setIsAccountDetailOpen(true);
                      }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 rounded-full bg-white shadow-sm border group-hover:shadow-md transition-shadow">
                              {getAccountTypeIcon(account.accountType)}
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">
                                {account.accountName}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {account.accountNumber}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">
                              {formatCurrency(account.balance)}
                            </p>
                            {(account.accountType === 'credit' || account.accountType === 'business_credit') && (
                              <p className="text-sm text-green-600 font-medium">
                                Available: {formatCurrency(account.availableBalance)}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Account Summary */}
          <div>
            <Card className="mb-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600 mb-2">
                    {formatCurrency(totalBalance.toString())}
                  </p>
                  <p className="text-sm text-green-700 font-medium">
                    Across all accounts
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-slate-800">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Total Accounts</span>
                    <span className="font-bold text-slate-800 text-lg">{accounts.length}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Recent Transactions</span>
                    <span className="font-bold text-slate-800 text-lg">{transactions.length}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Credit Available</span>
                    <span className="font-bold text-green-600 text-lg">
                      {formatCurrency(
                        accounts
                          .filter(a => a.accountType === 'credit' || a.accountType === 'business_credit')
                          .reduce((sum, a) => sum + parseFloat(a.availableBalance), 0)
                          .toString()
                      )}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="mt-6">
          <CardHeader className="bg-gradient-to-r from-gray-50 to-slate-50">
            <CardTitle className="flex items-center justify-between">
              <span className="text-slate-800">Recent Transactions</span>
              <Badge variant="outline" className="bg-white">
                {transactions.length} Total
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {transactions.slice(0, 8).map((transaction, index) => (
                <div 
                  key={transaction.id} 
                  className={`flex items-center justify-between p-6 hover:bg-gray-50 transition-colors ${
                    index === 0 ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      transaction.type === 'credit' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
                    }`}>
                      {getTransactionIcon(transaction.type)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-base">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.merchant} • {formatDate(transaction.date)}
                      </p>
                      {transaction.category && (
                        <Badge variant="secondary" className="text-xs mt-1">
                          {transaction.category}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold text-lg ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </p>
                    <Badge 
                      variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                      className={`${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : ''
                      }`}
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
              
              {/* View More Button */}
              {transactions.length > 8 && (
                <div className="p-6 text-center bg-gray-50">
                  <Button variant="outline" className="w-full">
                    View All {transactions.length} Transactions
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Account Detail Dialog */}
        <Dialog open={isAccountDetailOpen} onOpenChange={setIsAccountDetailOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Details</DialogTitle>
            </DialogHeader>
            {selectedAccount && (() => {
              const account = accounts.find(a => a.id === selectedAccount);
              const accountTransactions = transactions.filter(t => t.accountId === selectedAccount);
              
              if (!account) return null;
              
              return (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="p-3 rounded-full bg-white shadow-sm border">
                      {getAccountTypeIcon(account.accountType)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{account.accountName}</h3>
                      <p className="text-gray-600">{account.accountNumber}</p>
                      <p className="text-2xl font-bold text-green-600 mt-1">
                        {formatCurrency(account.balance)}
                      </p>
                      {(account.accountType === 'credit' || account.accountType === 'business_credit') && (
                        <p className="text-sm text-gray-600">
                          Available: {formatCurrency(account.availableBalance)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Recent Transactions</h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {accountTransactions.length > 0 ? (
                        accountTransactions.slice(0, 5).map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-full ${
                                transaction.type === 'credit' 
                                  ? 'bg-green-100 text-green-600' 
                                  : 'bg-red-100 text-red-600'
                              }`}>
                                {getTransactionIcon(transaction.type)}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{transaction.description}</p>
                                <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className={`font-bold text-sm ${
                                transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-center py-4">No recent transactions</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View All Transactions
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Receipt className="h-4 w-4 mr-2" />
                      Download Statement
                    </Button>
                  </div>
                </div>
              );
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}