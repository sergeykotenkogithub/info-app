import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import withMock from 'storybook-addon-mock'
import ArticlesPage from './ArticlesPage'

export default {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_expand=user&_limit=9&_page=1&_sort=createdAt&_order=asc&q=`,
      method: 'GET',
      status: 200,
      response: [
        // {
        //   id: '7',
        //   title: 'Ruby news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--oqV3akcU--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/pgnw91fs7tpxn0wyeqh2.jpg',
        //   views: 100,
        //   createdAt: '21.02.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '4',
        //   title: 'Scala news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://developer.worldpay.com/assets/images/articles/access-images/Slide1.PNG',
        //   views: 10222,
        //   createdAt: '24.01.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '3',
        //   title: 'Kotlin news 2019',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://pluspng.com/img-png/kotlin-logo-png-kotlin-collection-function-techshots-medium-1200x630.png',
        //   views: 94002,
        //   createdAt: '26.02.2019',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '5',
        //   title: 'Golang news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://itgap.ru/static/uploads/posts/2022/01/05/c2481e98da9b9e2efe8df2e6c1a93ede.jpg',
        //   views: 10222,
        //   createdAt: '26.02.2020',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '2',
        //   title: 'Python news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://www.goubuntu.ru/wp-content/uploads/2019/03/python.png',
        //   views: 5204,
        //   createdAt: '26.02.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '6',
        //   title: 'Java news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://andreyex.ru/wp-content/uploads/2018/05/Kak-ustanovit-Java-s-apt-na-Ubuntu-18.04.jpg',
        //   views: 1022,
        //   createdAt: '26.02.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '8',
        //   title: 'TypeScript news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://i.ytimg.com/vi/ztk9WZClmLQ/maxresdefault.jpg',
        //   views: 102222,
        //   createdAt: '26.02.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '9',
        //   title: 'Kotlin news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://pluspng.com/img-png/kotlin-logo-png-kotlin-collection-function-techshots-medium-1200x630.png',
        //   views: 1022,
        //   createdAt: '26.02.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
        // {
        //   id: '10',
        //   title: 'Python news',
        //   subtitle: 'Что нового в JS за 2022 год?',
        //   img: 'https://www.goubuntu.ru/wp-content/uploads/2019/03/python.png',
        //   views: 1022,
        //   createdAt: '26.02.2022',
        //   userId: '1',
        //   type: ['IT'],
        //   blocks: [
        //     {
        //       id: '1',
        //       type: 'TEXT',
        //       title: 'Заголовок этого блока',
        //       paragraphs: [
        //         'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        //         'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        //         'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
        //       ],
        //     },
        //   ],
        //   user: {
        //     id: '1',
        //     username: 'admin',
        //     password: '123',
        //     roles: ['ADMIN'],
        //     avatar:
        //       'https://corporateofficeheadquarters.org/wp-content/uploads/2021/05/Sam-Richman.jpg',
        //   },
        // },
      ],
    },
  ],
}
