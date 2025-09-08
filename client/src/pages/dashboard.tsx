import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  Plus
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
          <Button className="flex items-center justify-center h-16 bg-blue-600 hover:bg-blue-700">
            <Send className="h-5 w-5 mr-2" />
            Transfer Money
          </Button>
          <Button className="flex items-center justify-center h-16 bg-green-600 hover:bg-green-700">
            <Plus className="h-5 w-5 mr-2" />
            Deposit Check
          </Button>
          <Button className="flex items-center justify-center h-16 bg-purple-600 hover:bg-purple-700">
            <CreditCard className="h-5 w-5 mr-2" />
            Pay Bills
          </Button>
          <Button className="flex items-center justify-center h-16 bg-gray-600 hover:bg-gray-700">
            <Settings className="h-5 w-5 mr-2" />
            Account Settings
          </Button>
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
                      onClick={() => setSelectedAccount(account.id)}
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
                        onClick={() => setSelectedAccount(account.id)}
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
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.slice(0, 10).map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getTransactionIcon(transaction.type)}
                    <div>
                      <p className="font-medium text-gray-900">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-600">
                        {transaction.merchant} • {formatDate(transaction.date)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${
                      transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </p>
                    <Badge variant={transaction.status === 'completed' ? 'default' : 'secondary'}>
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}