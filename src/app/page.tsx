'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, ExternalLink, BookOpen, Code, Mail, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold text-xl">Ade Ramdani</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#portfolio" className="transition-colors hover:text-foreground/80">Portfolio</a>
              <a href="#tutorials" className="transition-colors hover:text-foreground/80">Tutorial</a>
              <a href="#dokumentasi" className="transition-colors hover:text-foreground/80">Dokumentasi</a>
              <a href="#kontak" className="transition-colors hover:text-foreground/80">Kontak</a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/ade-ramdani-photo.jpg" alt="Ade Ramdani" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, saya <span className="text-primary">Ade Ramdani</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              IT Administrator. Saya mengelola sistem infrastruktur IT dan berbagi pengetahuan melalui tutorial dan dokumentasi.
            </p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" asChild>
              <a href="https://github.com/aderamdani" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/aderamdani/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="tutorials">Tutorial</TabsTrigger>
            <TabsTrigger value="dokumentasi">Dokumentasi</TabsTrigger>
          </TabsList>

          {/* Portfolio Section */}
          <TabsContent value="portfolio" className="space-y-8" id="portfolio">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Portfolio Projects</h2>
              <p className="text-gray-500">Kumpulan proyek yang telah saya kerjakan</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Utilities Hub — Landing & Aggregator */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Utilities Hub</CardTitle>
                    <Badge variant="secondary">Next.js</Badge>
                  </div>
                  <CardDescription>
                    Portal utama (util.aderamdani.web.id) yang menggabungkan semua tools dan status page.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Vercel</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/aderamdani/utilities-hub" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://util.aderamdani.web.id" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* DNS & WHOIS Tool */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>DNS Lookup & WHOIS</CardTitle>
                    <Badge variant="secondary">Go / Node</Badge>
                  </div>
                  <CardDescription>
                    Pencarian DNS, lookup record, dan WHOIS yang mendukung batch query.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">DNS</Badge>
                    <Badge variant="outline">WHOIS</Badge>
                    <Badge variant="outline">API</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Try
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* SSL/TLS Health Monitor */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>SSL/TLS Health Monitor</CardTitle>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                  <CardDescription>
                    Service untuk memeriksa expiry, chain issues, dan grade SSL dengan notifikasi.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Cert Check</Badge>
                    <Badge variant="outline">Alerting</Badge>
                    <Badge variant="outline">Cron</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Status
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Uptime & Status Page */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Uptime & Status</CardTitle>
                    <Badge variant="secondary">Rust / Node</Badge>
                  </div>
                  <CardDescription>
                    Monitor endpoint, latency, dan public status page untuk layanan utilities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Uptime</Badge>
                    <Badge variant="outline">Notifications</Badge>
                    <Badge variant="outline">Status Page</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Status
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Network & Text Utilities */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Network & Text Tools</CardTitle>
                    <Badge variant="secondary">Frontend</Badge>
                  </div>
                  <CardDescription>
                    Kumpulan tools ringan: port scanner, traceroute, base64, JSON formatter, dan encoder/decoder.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Port Scan</Badge>
                    <Badge variant="outline">JSON</Badge>
                    <Badge variant="outline">Base64</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Tool
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tutorials Section */}
          <TabsContent value="tutorials" className="space-y-8" id="tutorials">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Tutorial & Artikel</h2>
              <p className="text-gray-500">Tutorial programming dan tips teknologi yang saya bagikan</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Tutorial Card 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Getting Started with Next.js 15
                    </CardTitle>
                    <Badge variant="secondary">Beginner</Badge>
                  </div>
                  <CardDescription>
                    Panduan lengkap untuk memulai development dengan Next.js 15 dan App Router
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Pelajari konsep dasar Next.js 15, App Router, Server Components, dan best practices untuk membangun aplikasi web modern.
                  </p>
                  <Button size="sm">Baca Tutorial</Button>
                </CardContent>
              </Card>

              {/* Tutorial Card 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      TypeScript Advanced Patterns
                    </CardTitle>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                  <CardDescription>
                    Pattern dan teknik TypeScript tingkat lanjut untuk development yang lebih baik
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Jelajahi advanced TypeScript patterns, generic types, utility types, dan bagaimana menerapkannya dalam proyek nyata.
                  </p>
                  <Button size="sm">Baca Tutorial</Button>
                </CardContent>
              </Card>

              {/* Tutorial Card 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Database Design dengan Prisma
                    </CardTitle>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                  <CardDescription>
                    Desain database modern dan ORM dengan Prisma untuk aplikasi yang scalable
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Pelajari cara mendesain database yang baik, relationship management, dan optimasi query dengan Prisma ORM.
                  </p>
                  <Button size="sm">Baca Tutorial</Button>
                </CardContent>
              </Card>

              {/* Tutorial Card 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5" />
                      Testing Strategies untuk Web Apps
                    </CardTitle>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                  <CardDescription>
                    Strategi testing komprehensif untuk aplikasi web modern
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Pelajari unit testing, integration testing, E2E testing dengan Jest, React Testing Library, dan Cypress.
                  </p>
                  <Button size="sm">Baca Tutorial</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documentation Section */}
          <TabsContent value="dokumentasi" className="space-y-8" id="dokumentasi">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Dokumentasi</h2>
              <p className="text-gray-500">Dokumentasi teknis dan panduan development</p>
            </div>

            <div className="space-y-6">
              {/* Documentation Category 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Web Development Guides</CardTitle>
                  <CardDescription>
                    Panduan lengkap untuk web development modern
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Frontend Development</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• React Best Practices</li>
                        <li>• State Management Patterns</li>
                        <li>• Performance Optimization</li>
                        <li>• Accessibility Guidelines</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Backend Development</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• API Design Principles</li>
                        <li>• Database Architecture</li>
                        <li>• Authentication & Authorization</li>
                        <li>• Security Best Practices</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Documentation Category 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Frameworks</CardTitle>
                  <CardDescription>
                    Dokumentasi untuk tools dan framework yang sering digunakan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <h4 className="font-semibold">JavaScript Ecosystem</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Node.js</li>
                        <li>• Express.js</li>
                        <li>• Next.js</li>
                        <li>• React</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Styling & UI</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Tailwind CSS</li>
                        <li>• shadcn/ui</li>
                        <li>• CSS-in-JS</li>
                        <li>• Responsive Design</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Database & ORM</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Prisma</li>
                        <li>• PostgreSQL</li>
                        <li>• MongoDB</li>
                        <li>• Redis</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Documentation Category 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Templates</CardTitle>
                  <CardDescription>
                    Template dan boilerplate untuk memulai proyek baru
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Starter Kits</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Next.js + TypeScript Starter</li>
                        <li>• React Native Boilerplate</li>
                        <li>• Full Stack Template</li>
                        <li>• API Server Template</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Configuration Files</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• ESLint & Prettier</li>
                        <li>• TypeScript Config</li>
                        <li>• Docker Setup</li>
                        <li>• CI/CD Pipeline</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16" id="kontak">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter">Hubungi Saya</h2>
          <p className="text-gray-500 max-w-[600px] mx-auto">
            Tertarik untuk kolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya!
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <a href="mailto:mr.aderamdani@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/aderamdani" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/aderamdani/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Ade Ramdani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}