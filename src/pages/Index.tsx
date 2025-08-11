import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Icon name="Globe" size={32} className="text-corporate-blue" />
              <span className="font-inter font-bold text-xl text-gray-900">FinAgent</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">О компании</a>
              <a href="#services" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">Услуги</a>
              <a href="#advantages" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">Преимущества</a>
              <a href="#process" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">Процесс</a>
              <a href="#geography" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">География</a>
              <a href="#partners" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">Партнёрам</a>
              <a href="#contacts" className="font-open-sans text-sm font-medium text-gray-700 hover:text-corporate-blue transition-colors">Контакты</a>
            </div>
            <Button className="bg-corporate-blue hover:bg-blue-700 text-white font-medium px-6 py-2">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-corporate-blue to-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-inter font-bold text-5xl md:text-6xl mb-6 leading-tight">
            Международный<br />
            <span className="text-blue-200">Финансовый Агент</span>
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Безопасные международные переводы и финансовые услуги по всему миру. 
            Ваш надёжный партнёр в глобальных финансовых операциях.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-corporate-blue hover:bg-gray-50 font-medium px-8 py-3">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-corporate-blue font-medium px-8 py-3">
              <Icon name="Play" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">О компании</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Более 10 лет опыта в сфере международных финансовых операций. 
              Мы обеспечиваем безопасность и скорость ваших переводов по всему миру.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <Icon name="Shield" size={48} className="text-success-green mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl text-gray-900 mb-3">Безопасность</h3>
                <p className="font-open-sans text-gray-600">
                  Все операции защищены современными протоколами шифрования и страхованием
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <Icon name="Clock" size={48} className="text-success-green mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl text-gray-900 mb-3">Скорость</h3>
                <p className="font-open-sans text-gray-600">
                  Переводы выполняются в течение 24 часов в любую точку мира
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent>
                <Icon name="Users" size={48} className="text-success-green mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl text-gray-900 mb-3">Доверие</h3>
                <p className="font-open-sans text-gray-600">
                  Более 50 000 довольных клиентов и партнёров по всему миру
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">Наши услуги</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр финансовых услуг для частных лиц и бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-corporate-blue">
              <CardContent>
                <Icon name="CreditCard" size={32} className="text-corporate-blue mb-4" />
                <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Международные переводы</h3>
                <p className="font-open-sans text-sm text-gray-600">
                  Быстрые и безопасные переводы в любую страну мира
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-success-green">
              <CardContent>
                <Icon name="Briefcase" size={32} className="text-success-green mb-4" />
                <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Корпоративные услуги</h3>
                <p className="font-open-sans text-sm text-gray-600">
                  Финансовое сопровождение бизнеса и международной торговли
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-corporate-blue">
              <CardContent>
                <Icon name="PiggyBank" size={32} className="text-corporate-blue mb-4" />
                <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Валютные операции</h3>
                <p className="font-open-sans text-sm text-gray-600">
                  Обмен валют по выгодным курсам без скрытых комиссий
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-success-green">
              <CardContent>
                <Icon name="FileText" size={32} className="text-success-green mb-4" />
                <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Консультации</h3>
                <p className="font-open-sans text-sm text-gray-600">
                  Экспертная поддержка по международным финансовым операциям
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">Наши преимущества</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-corporate-blue text-white rounded-full p-3 flex-shrink-0">
                    <Icon name="Zap" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-gray-900 mb-2">Мгновенные уведомления</h3>
                    <p className="font-open-sans text-gray-600">
                      Получайте уведомления о статусе перевода в реальном времени
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-success-green text-white rounded-full p-3 flex-shrink-0">
                    <Icon name="DollarSign" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-gray-900 mb-2">Выгодные курсы</h3>
                    <p className="font-open-sans text-gray-600">
                      Лучшие обменные курсы на рынке без скрытых комиссий
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-corporate-blue text-white rounded-full p-3 flex-shrink-0">
                    <Icon name="Headphones" size={24} />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-xl text-gray-900 mb-2">24/7 поддержка</h3>
                    <p className="font-open-sans text-gray-600">
                      Круглосуточная техническая поддержка на 12 языках
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-corporate-blue to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="font-inter font-bold text-2xl mb-6">Статистика компании</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-inter font-bold text-3xl mb-2">50K+</div>
                  <div className="font-open-sans text-sm text-blue-200">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="font-inter font-bold text-3xl mb-2">180+</div>
                  <div className="font-open-sans text-sm text-blue-200">Стран обслуживания</div>
                </div>
                <div className="text-center">
                  <div className="font-inter font-bold text-3xl mb-2">$2.5B+</div>
                  <div className="font-open-sans text-sm text-blue-200">Переведено средств</div>
                </div>
                <div className="text-center">
                  <div className="font-inter font-bold text-3xl mb-2">10+</div>
                  <div className="font-open-sans text-sm text-blue-200">Лет на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">Логика процесса</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Простой и прозрачный процесс выполнения международных переводов
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-corporate-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="font-inter font-bold text-xl">1</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Заявка</h3>
              <p className="font-open-sans text-sm text-gray-600">
                Подаете заявку онлайн или через менеджера
              </p>
              {/* Connection line */}
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-success-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="font-inter font-bold text-xl">2</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Верификация</h3>
              <p className="font-open-sans text-sm text-gray-600">
                Проверяем документы и подтверждаем операцию
              </p>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
            </div>
            
            <div className="text-center relative">
              <div className="bg-corporate-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="font-inter font-bold text-xl">3</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Перевод</h3>
              <p className="font-open-sans text-sm text-gray-600">
                Осуществляем перевод через защищенные каналы
              </p>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
            </div>
            
            <div className="text-center">
              <div className="bg-success-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-inter font-bold text-xl">4</span>
              </div>
              <h3 className="font-inter font-semibold text-lg text-gray-900 mb-2">Подтверждение</h3>
              <p className="font-open-sans text-sm text-gray-600">
                Получаете уведомление о завершении операции
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">География переводов</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Работаем по всему миру — от крупных финансовых центров до удаленных регионов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent>
                <Icon name="MapPin" size={48} className="text-corporate-blue mx-auto mb-4" />
                <h3 className="font-inter font-bold text-2xl text-gray-900 mb-2">Европа</h3>
                <p className="font-open-sans text-gray-600 mb-4">47 стран</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>🇩🇪 Германия • 🇫🇷 Франция • 🇬🇧 Великобритания</div>
                  <div>🇪🇸 Испания • 🇮🇹 Италия • 🇵🇱 Польша</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent>
                <Icon name="MapPin" size={48} className="text-success-green mx-auto mb-4" />
                <h3 className="font-inter font-bold text-2xl text-gray-900 mb-2">Азия</h3>
                <p className="font-open-sans text-gray-600 mb-4">52 страны</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>🇨🇳 Китай • 🇯🇵 Япония • 🇰🇷 Южная Корея</div>
                  <div>🇸🇬 Сингапур • 🇹🇭 Таиланд • 🇮🇳 Индия</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent>
                <Icon name="MapPin" size={48} className="text-corporate-blue mx-auto mb-4" />
                <h3 className="font-inter font-bold text-2xl text-gray-900 mb-2">Америка</h3>
                <p className="font-open-sans text-gray-600 mb-4">35 стран</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>🇺🇸 США • 🇨🇦 Канада • 🇲🇽 Мексика</div>
                  <div>🇧🇷 Бразилия • 🇦🇷 Аргентина • 🇨🇱 Чили</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-inter font-bold text-3xl text-corporate-blue mb-2">180+</div>
                <p className="font-open-sans text-sm text-gray-600">Стран мира</p>
              </div>
              <div>
                <div className="font-inter font-bold text-3xl text-success-green mb-2">150+</div>
                <p className="font-open-sans text-sm text-gray-600">Валют</p>
              </div>
              <div>
                <div className="font-inter font-bold text-3xl text-corporate-blue mb-2">24ч</div>
                <p className="font-open-sans text-sm text-gray-600">Максимальное время</p>
              </div>
              <div>
                <div className="font-inter font-bold text-3xl text-success-green mb-2">0.5%</div>
                <p className="font-open-sans text-sm text-gray-600">Минимальная комиссия</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">Партнёрам</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Выгодные условия сотрудничества для агентов и корпоративных клиентов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent>
                <Icon name="Users" size={48} className="text-corporate-blue mb-6" />
                <h3 className="font-inter font-bold text-2xl text-gray-900 mb-4">Агентская программа</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Комиссия до 2% с каждого перевода</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Персональный менеджер</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Маркетинговая поддержка</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Обучение и сертификация</span>
                  </li>
                </ul>
                <Button className="bg-corporate-blue hover:bg-blue-700 text-white w-full">
                  Стать агентом
                </Button>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent>
                <Icon name="Building2" size={48} className="text-success-green mb-6" />
                <h3 className="font-inter font-bold text-2xl text-gray-900 mb-4">Корпоративным клиентам</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Индивидуальные тарифы</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">API интеграция</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Массовые переводы</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-success-green" />
                    <span className="font-open-sans">Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="bg-success-green hover:bg-green-700 text-white w-full">
                  Корпоративное предложение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-gray-900 mb-4">Контакты</h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом — мы всегда на связи
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent>
                <Icon name="Phone" size={48} className="text-corporate-blue mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl text-gray-900 mb-3">Телефон</h3>
                <p className="font-open-sans text-gray-600 mb-2">+7 (495) 123-45-67</p>
                <p className="font-open-sans text-gray-600">+1 (555) 123-4567</p>
                <p className="font-open-sans text-sm text-gray-500 mt-2">24/7 поддержка</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent>
                <Icon name="Mail" size={48} className="text-success-green mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl text-gray-900 mb-3">Email</h3>
                <p className="font-open-sans text-gray-600 mb-2">info@finagent.com</p>
                <p className="font-open-sans text-gray-600">support@finagent.com</p>
                <p className="font-open-sans text-sm text-gray-500 mt-2">Ответ в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 text-center">
              <CardContent>
                <Icon name="MapPin" size={48} className="text-corporate-blue mx-auto mb-4" />
                <h3 className="font-inter font-semibold text-xl text-gray-900 mb-3">Офисы</h3>
                <p className="font-open-sans text-gray-600 mb-2">Москва, Красная площадь, 1</p>
                <p className="font-open-sans text-gray-600">London, 1 Canary Wharf</p>
                <p className="font-open-sans text-sm text-gray-500 mt-2">Пн-Пт 9:00-18:00</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="font-inter font-bold text-2xl text-gray-900 text-center mb-6">Быстрая связь</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Button className="bg-corporate-blue hover:bg-blue-700 text-white h-12">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Онлайн чат
              </Button>
              <Button variant="outline" className="border-success-green text-success-green hover:bg-success-green hover:text-white h-12">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на встречу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-gray text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Globe" size={32} className="text-corporate-blue" />
                <span className="font-inter font-bold text-xl">FinAgent</span>
              </div>
              <p className="font-open-sans text-sm text-gray-400">
                Надёжный партнёр в международных финансовых операциях с 2014 года.
              </p>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Международные переводы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Валютные операции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративные услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Партнёрам</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-inter font-semibold text-lg mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-open-sans text-sm text-gray-400">
              © 2024 FinAgent. Все права защищены.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="font-open-sans text-sm text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="font-open-sans text-sm text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}