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
        return <CreditCard className="h-5 w-5" />;
      case 'savings':
        return <TrendingUp className="h-5 w-5" />;
      case 'credit':
        return <Building className="h-5 w-5" />;
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Your Accounts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accounts.map((account) => (
                    <div 
                      key={account.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setSelectedAccount(account.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {getAccountTypeIcon(account.accountType)}
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {account.accountName}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {account.accountNumber}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900">
                            {formatCurrency(account.balance)}
                          </p>
                          {account.accountType === 'credit' && (
                            <p className="text-sm text-gray-600">
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
          </div>

          {/* Account Summary */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Total Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">
                    {formatCurrency(totalBalance.toString())}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Across all accounts
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Accounts</span>
                    <span className="font-semibold">{accounts.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recent Transactions</span>
                    <span className="font-semibold">{transactions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Credit Available</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(
                        accounts
                          .filter(a => a.accountType === 'credit')
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