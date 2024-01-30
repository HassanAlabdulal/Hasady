import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <Tabs defaultValue="signIn" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signIn">تسجيل الدخول</TabsTrigger>
        <TabsTrigger value="singUp">التسجيل</TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <Card>
          <CardHeader>
            <CardTitle>تسجيل الدخول</CardTitle>
            <CardDescription>
              قم بتسجيل الدخول من هنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">البريد الالكتروني</Label>
              <Input id="email" placeholder="flosya.help@gmail.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input id="password" placeholder="********" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="center">تسجيل الدخول</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="signUp">
        <Card>
          <CardHeader>
            <CardTitle>التسجيل</CardTitle>
            <CardDescription>
              قم بتسجيل حساب جديد من هنا
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default TabsDemo;