"use client"; 

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";


import { 
  Settings, Share2, Edit, BookOpen, Users, UserPlus, Heart, 
  Mail, Globe, Calendar, 
  
  Link as TwitterIcon, 
  Code as GithubIcon, 
  User as LinkedinIcon, 
  MessageCircle as FacebookIcon, 
  Camera as InstagramIcon, 
  PlayCircle as YoutubeIcon, 
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        <Card className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="h-24 w-24 border-4 border-white dark:border-gray-700 shadow-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>ИП</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold">Полищук Диана</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">Senior Frontend Developer</p>
              <p className="text-sm text-blue-500 font-mono">@Polis-Diana</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
                Создаю быстрые и красивые веб-интерфейсы.
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto">
              <Button variant="default" className="w-full md:w-auto">
                <Edit className="mr-2 h-4 w-4" /> Редактировать
              </Button>
              <Button variant="outline" className="w-full md:w-auto">
                <Share2 className="mr-2 h-4 w-4" /> Поделиться
              </Button>
              <Button variant="ghost" size="icon" className="w-full md:w-auto justify-center">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center gap-1 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <BookOpen className="h-6 w-6 text-blue-500 mb-1" />
                <span className="text-2xl font-bold">142</span>
                <span className="text-sm text-gray-500">Публикации</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Users className="h-6 w-6 text-green-500 mb-1" />
                <span className="text-2xl font-bold">5.2K</span>
                <span className="text-sm text-gray-500">Подписчики</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <UserPlus className="h-6 w-6 text-purple-500 mb-1" />
                <span className="text-2xl font-bold">318</span>
                <span className="text-sm text-gray-500">Подписки</span>
              </div>

              <div className="flex flex-col items-center gap-1 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Heart className="h-6 w-6 text-red-500 mb-1" />
                <span className="text-2xl font-bold">12.8K</span>
                <span className="text-sm text-gray-500">Лайки</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-2">О себе</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Привет! Я студент-разработчик работаю в создании веб-приложений.
              В свободное время веду блог о технологиях, участвую в open-source проектах и менторю начинающих разработчиков. 
              Верю, что хороший код — это не только про логику, но и про эстетику.
            </p>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Навыки</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">Контакты</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span>diane.2008.andreevna@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-gray-400" />
                  <a href="#" className="text-blue-500 hover:underline">Lol.io</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span>На платформе с Октября 2021</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <TwitterIcon className="h-4 w-4 text-gray-400" />
                  <a href="#" className="text-blue-500 hover:underline">@Poli_dev</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="all">Все посты</TabsTrigger>
                <TabsTrigger value="media">Медиа</TabsTrigger>
                <TabsTrigger value="docs">Документы</TabsTrigger>
                <TabsTrigger value="fav">Избранное</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <div className="p-4 border rounded-lg dark:border-gray-700">
                  <h4 className="font-bold">Как я оптимизировал Next.js приложение</h4>
                  <p className="text-sm text-gray-500 mt-1">Рассказываю про Server Components и кэширование...</p>
                </div>
                <div className="p-4 border rounded-lg dark:border-gray-700">
                  <h4 className="font-bold">Топ-5 библиотек для UI в 2026 году</h4>
                  <p className="text-sm text-gray-500 mt-1">Обзор shadcn, Radix, Mantine и других...</p>
                </div>
              </TabsContent>
              
              <TabsContent value="media">
                <p className="text-center text-gray-500 py-8">Здесь будут ваши фото и видео.</p>
              </TabsContent>
              
              <TabsContent value="docs">
                <p className="text-center text-gray-500 py-8">Здесь будут загруженные документы.</p>
              </TabsContent>
              
              <TabsContent value="fav">
                <p className="text-center text-gray-500 py-8">Здесь ваши сохраненные закладки.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <footer className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
            
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">N</div>
              <span>© 2026 NextProfile. Все права защищены.</span>
            </div>


            <Separator orientation="vertical" className="hidden md:block h-4 bg-gray-300 dark:bg-gray-600" />


            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition">О нас</a>
              <a href="#" className="hover:text-blue-500 transition">Поддержка</a>
              <a href="#" className="hover:text-blue-500 transition">Блог</a>
              <a href="#" className="hover:text-blue-500 transition">Вакансии</a>
            </div>


            <Separator orientation="vertical" className="hidden md:block h-4 bg-gray-300 dark:bg-gray-600" />

            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition">Конфиденциальность</a>
              <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300 transition">Условия использования</a>
            </div>


            <div className="flex gap-3">
              <a href="#" className="hover:text-blue-500 transition"><FacebookIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition"><TwitterIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition"><InstagramIcon className="h-5 w-5" /></a>
              <a href="#" className="hover:text-blue-500 transition"><GithubIcon className="h-5 w-5" /></a>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}