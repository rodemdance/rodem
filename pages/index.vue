<template>
  <div v-resize="onResize">

    <!-- Hero unit -->
    <v-row justify="center" align="center">
      <v-img
        gradient="to top right, rgba(255,181,167,0.3), rgba(109,104,117,0.53)"
        contains src="/images/header.jpg"
        class="bg align-center text-center hero-image">
        <v-img
          src="/rodem - white.svg"
          :width="$vuetify.breakpoint.smAndDown ? '80%' : '40%'"
          class="main-logo"
        ></v-img>
        <v-row class="pb-8 hero-text" v-show="changeHeader">
          <v-col cols="3" offset="1">
            <h4 class="mb-6 font-family-philosopher red--text fs135">
              Танцювальна школа для людей будь-якого віку і рівнів підготовки.<br/>
              Тут кожного вчать техніці, емоціям та цьому прекрасному мистецтву - <br/>
              МИСТЕЦТВУ ТАНЦЮ!
            </h4>
            <v-btn color="red darken-2" class="rounded-pill" dark>Хочу навчитись!</v-btn>
          </v-col>
        </v-row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute; bottom: 0; left: 0;">
          <path fill="#FFF" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,170.7C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </v-img>
    </v-row>

    <!-- Main text if screen is small -->
    <v-row class="pb-8 text-center w-100 ma-0" v-show="!changeHeader">
      <v-col cols="12" class="text-center">
        <h4 class="mb-6 font-family-philosopher red--text fs135">
        Танцювальна школа для людей будь-якого віку і рівнів підготовки.<br/>
        Тут кожного вчать техніці, емоціям та цьому прекрасному мистецтву - <br/>
        МИСТЕЦТВУ ТАНЦЮ!
        </h4>
      <v-btn color="red darken-2 margin-auto" class="rounded-pill" dark>Хочу навчитись!</v-btn>
    </v-col>
  </v-row>

  <!-- About -->
  <v-row class="text-center pt-12 pb-12" justify="center" id="about" rel="about">
    <v-col cols="9">
      <h1 class="red--text text--darken-1 font-family-lobster mb-8">Про клуб</h1>
      <p class="font-family-philosopher mb-12 fs120">Якщо вам періодично спадає на думку де можна записатися на танці в Ужгороді то ви звернулися за вірною адресою. Приєднуйтеся до нашої школи танців і отримаєте відпочинок від домашніх турбот та робочої рутини. Ви станете центром уваги будь-якої вечірки, затребуваним партнером для танців. Отримайте масу приємних емоцій. Створіть собі красиве тіло.</p>
      <p class="font-family-philosopher font-weight-bold fs120">Родем - це танці для дорослих та дітей, зручний зал в центрі Ужгорода, завжди приємна та привітна атмосфера.</p>
    </v-col>
  </v-row>

  <!-- Dance list -->
  <v-row id="danceList" rel="danceList">
    <v-img
      gradient="to top right, rgba(248, 237, 235,0.95), rgba(248, 237, 235,0.95)"
      src="/images/smile.jpg" :aspect-ratio="16/1"
      class="bg align-center">

      <!-- Buttons -->
      <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 9" class="pt-12 pb-12 margin-auto">
        <v-sheet v-show="!$vuetify.breakpoint.smAndDown" class="mx-auto" color="rgba(0,0,0,0)" show-arrows>
          <v-slide-group v-model="currentDance">
            <v-slide-item v-for="(dance, index) in dances" :key="index" v-slot="{ active, toggle }">
              <v-btn class="mx-2" color="red" text :input-value="active" active-class="darken-4" rounded @click="toggle">
                {{ dance.title }}
              </v-btn>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <div class="text-center" v-show="$vuetify.breakpoint.smAndDown">
          <v-menu offset-y close-on-click rounded>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mx-2" color="red" dark active-class="darken-4" rounded v-bind="attrs" v-on="on">
                {{ dances[currentDance].title }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(dance, index) in dances" :key="index">
                <v-list-item-title @click="currentDance = index">{{ dance.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <!-- Dance information -->
        <v-card class="elevation-0 mt-8" color="rgba(0,0,0,0)">
          <v-card-text>
            <v-row>
              <v-col
                :cols="$vuetify.breakpoint.smAndDown ? 12 : 6"
                class="black--text font-family-philosopher"
                :class="{ 'offset-sm-6': !$vuetify.breakpoint.smAndDown && currentDance % 2 === 1 }">
                <v-fade-transition mode="in-out">
                <div v-show="Number.isInteger(currentDance)">
                  <div class="headline font-weight-bold mb-4">{{ dances[currentDance].title }}</div>
                  <p>{{ dances[currentDance].description }}</p>
                  <div class="headline font-weight-bold mb-4">Розклад занять</div>
                  <p v-for="(schedule, i) in dances[currentDance].time"><strong>{{ schedule.day }}:</strong> {{ schedule.time }}</p>
                  <v-btn color="red darken-2" class="rounded-pill mt-8" dark @click="danceDialog = true">Дізнатись більше</v-btn>
                </div>
                </v-fade-transition>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-img>
  </v-row>
  
  <!-- Events -->
  <v-row v-if="events.length" class="pt-16" justify="center"  id="eventsList" rel="eventsList">
    <v-col :cols="$vuetify.breakpoint.smAndDown ? 12 : 8">
      <h1 class="red--text text-center text--darken-1 font-family-lobster mb-12">Найближчі події</h1>
      <v-row>
        <!-- Columns -->
        <v-col :cols="$vuetify.breakpoint.smAndDown || events.length === 1 ? 12 : 6">
          <event :events="oddEvents"></event>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown || events.length === 1 ? 12 : 6" class="mt-12">
          <event :events="evenEvents"></event>
        </v-col>

      </v-row>
    </v-col>
  </v-row>

  <!-- Reviews -->
  <v-row style="position: relative; top:16px;" id="reviews" rel="reviews" class="pt-12">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-0 pt-12" style="background: #EEE">Про нас говорять</h1>
    <v-carousel cycle style="min-height: 300px;" hide-delimiter-background show-arrows-on-hover class="pb-4">
      <v-carousel-item interval="10000" v-for="(slide, i) in slides" :key="i">
        <v-sheet color="#EEE" class=pt-10>
          <v-row class="fill-height text-center" align="center" justify="center">
            <div style="width:60%" class="margin-auto">
              <div><v-img :src="slide.authorImg" :aspect-ratio="1" width="140" class="margin-auto mb-6 rounded-circle"></v-img></div>
              <div class="font-family-philosopher mb-8 fs120">{{ slide.text }}</div>
              <div class="font-family-lobster pb-16 fs150">
                <a target="_blank" :href="slide.url">{{ slide.author }}</a>
              </div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-row>

  <!-- Contacts -->
  <v-row style="position: relative;"  id="contacts" rel="contacts">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-4 pt-4" style="position:absolute; z-index: 1999; top: 0px;">Завітай вже сьогодні</h1>
    <div id="map" style="width: 100%; height: 75vh;"></div>
  </v-row>

  <v-dialog v-if="dances && dances.length && Number.isInteger(currentDance)" v-model="danceDialog" width="500" style="z-index: 3010;">
    <v-card>
      <v-card-title class="grey fs120 lighten-2 text--darken-2 red--text font-family-lobster">{{ dances[currentDance].title }}</v-card-title>
      <v-img :src="dances[currentDance].image" :aspect-ratio="16/9" style="width: 100%;" class="mb-4"></v-img>
      <v-card-text class="font-family-philosopher">
        <vue-markdown>{{ dances[currentDance].fullText }}</vue-markdown>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-2" class="rounded-pill" text @click="danceDialog = false">
          Закрити
        </v-btn>
        <v-btn color="red darken-2" class="rounded-pill" dark @click="danceDialog = false">Записатися!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
import VueMarkdown from '@adapttive/vue-markdown'
 
export default {
  name: 'IndexPage',
  components: {
    VueMarkdown
  },
  mounted () {
    const map = L.map('map', {
      gestureHandling: true,
      gestureHandlingOptions: {
        text: {
          touch: 'Щоб перемістити положення карти, користуйтеся двома пальцями',
          scroll: 'Для наближення карти, натисність Ctrl та використовуйте скрол',
          scrollMac: 'Для наближення карти, натисність \u2318 та використовуйте скрол'
        }
      }
    }).setView([48.6268452,22.3015054], 16)

    const rodemIcon = L.icon({
        iconUrl: '/map-marker.png',
        iconSize:     [38, 52],
        iconAnchor:   [22, 51],
        popupAnchor:  [-3, -50]
    })

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map)

    const marker = L.marker([48.6254452,22.3015054], { icon: rodemIcon }).addTo(map)

    marker.bindPopup(`
      <img style="width:100%;" src="/images/fedyncia.jpg">
      <b>Танцювальний клуб "Родем",</b><br/>вулиця О. Фединця 43,<br/>Ужгород`)

    if (window.innerHeight > 500) marker.openPopup()

  },
  computed: {
    changeHeader () {
      return this.windowWidth >= 1440
    },
    oddEvents () {
      return this.events.filter((el, index) => index % 2 === 0)
    },
    evenEvents () {
      return this.events.filter((el, index) => index % 2 === 1)
    }
  },
  methods: {
    onResize () {
      this.windowWidth = window.innerWidth
    }
  },
  data () {
    return {
      danceDialog: false,
      eventDialog: false,
      currentDance: 0,
      windowWidth: 1440,
      currentEvent: {},
      icons: [
      ],
      slides: [
        {
          text: '«Її креативний бізнес — це не просто спорт, а добра справа, адже дівчина змінює життя інших на краще. Коли приходиш у “Родем”, то навколо Віки завжди повно радісних дітей і усміхнених дорослих. Танці — це вже інший світогляд, нові емоції і хороша фізична форма!»',
          author: 'Евеліна Гурницька',
          authorImg: '/images/hurnytska.jpg',
          url: 'https://prozak.info/Osobistosti/Divochij-tvorchij-startap-Vika-IIvanic-ka'
        },
        {
          text: '«В Ужгороді познайомився з гарною командою місцевого танцювального клуба "Родем"! Трохи потренувалися та поспілкувались. З соціальними танцями у будь-яких містах та країна для тебе відкриті двері та знаходяться нові сальса-друзі!»',
          author: 'Віктор Рибін',
          authorImg: '/images/rybin.png',
          url: 'https://www.facebook.com/permalink.php?story_fbid=564785100621019&id=100012686025639'
        },
        {
          text: '«4 години інтенсиву і як може бути, якщо не поспішати, контролювати намір і бути на зворотньому зв\'язку:) якщо розуміти що ти робиш і нащо, а це вже особистісне індивідуальне. Такі люди надихають працювати!»',
          author: 'Зоряна Кавецька',
          authorImg: '/images/kavetska.jpg',
          url: 'https://www.facebook.com/groups/1263601537004774/posts/2425794284118821'
        }
      ],
      dances: [
        {
          title: 'Для дітей',
          image: '/images/another_activities.jpg',
          description: 'Рух - це життя, наш рух-це танець! Танцювальний клуб  RODEM запрошує на групові заняття дітей та підлітків.',
          fullText: 'Рух - це життя, наш рух-це танець! Танцювальний клуб  RODEM запрошує на групові заняття дітей та підлітків.',
          time: [
            { day: 'Понеділок', time: 'з 16:30 (8-11 років)' },
            { day: 'Вівторок', time: 'з 16:00 (12-16 років)' },
            { day: 'Середа', time: 'з 16:30 (8-11 років)' },
            { day: 'Четвер', time: 'з 16:00 (12-16 років)' },            
          ]
        },
        {
          title: 'Контемп',
          image: '/images/another_activities.jpg',
          description: 'Головне в контемпі - це задоволення від танцю та імпровізації, ваша свобода самовираження та індивідуальність. Контемпорарі –  різновид сучасного танцю, що поєднує західні і східні методики (класичний танець, джаз модерн, цигун, йога).',
          fullText: 'Головне в контемпі - це задоволення від танцю та імпровізації, ваша свобода самовираження та індивідуальність. Контемпорарі –  різновид сучасного танцю, що поєднує західні і східні методики (класичний танець, джаз модерн, цигун, йога).',
          time: [
            { day: 'Вівторок', time: 'з 18:30 до 20:00' },
            { day: 'Четвер', time: 'з 18:30 до 20:00' },            
          ],
          fullDescription: contemp
        },
        {
          title: 'Танго',
          image: '/images/another_activities.jpg',
          description: 'Аргентинське танго - це друге дихання ділового міста, його пристрасть і загадкова душа втілена в танці. Танго проникає всередину й досягає сердець тих, хто споглядає за танцівниками, завдяки тим почуттям, які вони вкладають у танець.',
          fullText: 'Аргентинське танго - це друге дихання ділового міста, його пристрасть і загадкова душа втілена в танці. Танго проникає всередину й досягає сердець тих, хто споглядає за танцівниками, завдяки тим почуттям, які вони вкладають у танець.',
          time: [
            { day: 'Понеділок', time: 'з 18:30 до 20:00' },
            { day: 'Середа', time: 'з 18:30 до 20:00' },
          ],
          fullDescription: tango
        },
        {
          title: 'Бачата',
          image: '/images/another_activities.jpg',
          description: 'Бачата - дивовижний і неповторний латиноамериканський танець. Еротичність, романтичність, показ почуттів і максимальна близькість партнерів - це ті характерні риси, завдяки яким бачата завоювала серця мільйонів. ',
          fullText: 'Бачата - дивовижний і неповторний латиноамериканський танець. Еротичність, романтичність, показ почуттів і максимальна близькість партнерів - це ті характерні риси, завдяки яким бачата завоювала серця мільйонів. ',
          time: [
            { day: 'Понеділок', time: 'з 18:30 до 20:00' },
            { day: 'Середа', time: 'з 18:30 до 20:00' },
          ],
          fullDescription: bachata
        },
      ],
      events: [
        {
          date: new Date('2022-08-22'),
          title: 'Курс ефективного спілкування "Психологія успіху" (7-9 років)',
          description: 'Вчимось мислити в інтерактивній формі. 5 днів спілкування, творчості, йоги та захоплюючих ігор',
          fullText: uspikh,
          image: '/images/children_reading.jpg'
        },
        {
          date: new Date('2022-06-16'),
          title: 'Майстер-клас "Прикраса з бісеру"',
          description: 'Створи свою неповторну прикрасу. Вчимось плести браслети, кільця, ланцюжки, сережки',
          fullText: biser,
          image: '/images/biser.jpg'
        },
        {
          date: new Date('2022-05-11'),
          title: 'Майстер-клас "Солодкий букет"',
          description: 'Хто бажає навчитись робити квіти власними руками? І зробити подарунок рідним до Міжнародного дня сім\'ї?',
          fullText: 'Хто бажає навчитись робити квіти власними руками? І зробити подарунок рідним до Міжнародного дня сім\'ї?',
          image: '/images/bouquet.jpg'
        },
        {
          date: new Date('2022-04-20'),
          title: 'Майстер-клас "Велика писанка"',
          description: 'Розпис писанок в теплій сімейній атмосфері клубу RODEM',
          fullText: 'Хто бажає навчитись робити квіти власними руками? І зробити подарунок рідним до Міжнародного дня сім\'ї?',
          image: '/images/pysanka.jpg'
        }
      ]
    }
  }
}

const contemp = `
ваша свобода самовираження та індивідуальність. Контемпорарі –  різновид сучасного танцю, що поєднує західні і східні методики (класичний танець, джаз модерн, цигун, йога).  Йому притаманні легкі і виразні рухи, зазвичай танцюється босоніж.

Заняття починається з розігріву - підготовки м'язів та суглобів,стрибків, технік розслаблення і розтяжки.

Велика увага приділяється диханню, усвідомленню тіла, якості рухів, роботі з простором, вагою тіла та емоціями. 

Якщо ви хочете освоїти нове хобі і любите танцювати, запрошуємо до dance club RODEM.

Контемп- це швидше, мистецтво, філософія, яка виражає в русі особисті переживання та емоції. 

Ви  навчитесь відчувати своє тіло, розвинете пластику, музикальність, здобудете душевну рівновагу  і гармонію.

Деталі та запис за тел. 066 39 57 382
`

const tango = `
Аргентинське танго - це друге дихання ділового міста, його пристрасть і загадкова душа втілена в танці. Танго проникає всередину й досягає сердець тих, хто споглядає за танцівниками, завдяки тим почуттям, які вони вкладають у танець.
Основана відмінність аргентинського танго від європейського, яке практикують в тих школах Ужгорода де вивчають бальні танці, заключається в тому, що аргентинське танго це завжди імпровізація. На уроках дівчата вчаться довіряти чоловікам, а чоловіки вчаться приймати швидкі рішення і нести відповідальність за двох. Крім того танго надає можливіть взаємодіяти не тільки з тим партнером з котрим ви відвідуєте уроки, а і з людьми по всьому світу котрі займаються цим видом.
Тривалий час наше місто не могло похвалитися можливістю вивчати цей танець, але зараз часи змінилися і ось вже декілька років як у всіх бажаючих є можливість відвідувати уроки аргентинського танго у зручному залі, у центрі Ужгорода в танцювальному клубі Родем.
`

const fiesta = `
Пориньте в різнобарвний світ латиноамериканської фієсти, зробіть своє життя яскравішим і цікавішим, знайдіть захоплення, яке здатне захопити вас з головою!
`

const bachata = `Бачата - дивовижний і неповторний латиноамериканський танець. Еротичність, романтичність, показ почуттів і максимальна близькість партнерів - це ті характерні риси, завдяки яким бачата завоювала серця мільйонів. Пориньте і Ви в океан почуттів і романтики і почніть вчитися танцювати цей дивовижний танець!
`
const biser = `
Бісероплетіння належить до декоративного мистецтва, яке має багатовікову історію.

Бісером прикрашають одяг і вишивають картини, плетуть прикраси та аксесуари. 

Це хобі, яке приносить задоволення та заспокоює, розвиває уяву та уважність.

На мастер-класі ми вчимось розуміти і плести по схемам, що завжди стане в нагоді.

Запрошуємо в групу, кожного четверга о 14:30 до клубу РОДЕМ, м. Ужгород
`

const uspikh = `
Інтерактивна розвиваюча програма, саме те, що потрібно дитині цього літа!

Спілкування і пізнання себе!  

Займаємось по методиці відомого психолога Оскара Бреніф’є "Мистецтво мислити, задавати питання і вести діалог"

Вік учасників: 7-9 років,  10-15 років

Дати: 

* 11-15 липня 2022
* 18-22 липня 2022
* 25-29 липня 2022

Що будемо робити:

* виведемо свою формулу успішного спілкування;
* надихнемось власними мріями і новими знайомствами;
* поговоримо на теми впевненості і самопрезентації;
* будемо виражати свої емоції через рух, і танець;
* навчимось знаходити спільну мову з батьками, друзями, однолітками  і вести діалог;
* створимо свою карту бажань.

Програма курсу включає:

* теорія з психології 
* творчі завдання 
* імітаційні ігри
* йога 
* командні вправи
* смачні  перекуси 

Телефонуйте для бронювання місць і детальної інформації: <a href="tel:+380663957382">066 395 73 82</a>

Кожен учасник отримає роздаткові матеріали, робочий зошит та сертифікат.

За результатами курсу батьки отримають зворотній зв’язок. 

Ведучі курсу:

**Мар'яна Плакош** - сімейний та дитячий психолог, з практичним досвідом роботи 11 років. Власниця психологічної студії «INSIDE».

**Вікторія Іваницька** - керівник і хореограф клубу «RODEM», 9 років навчаємо і захоплює танцями дітей та дорослих нашого міста Ужгород.
`

const pysanka = `
Розпис писанок в теплій сімейній атмосфері клубу RODEM

Власна писанка, декорована символами миру, здоров’я, родинного щастя, достаткуй -це чудовий оберіг, подарунок, що залишиться вам на згадку.
 `

</script>

<style>
.bg {
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 30%, #FFCC70 66%, #ffffff 100%);
}
.vh100 {
  height: 100vh;
}
.font-family-lobster {
  font-family: 'Lobster', 'Arial', sans-serif !important;
}
.font-family-philosopher {
  font-family: 'Philosopher', 'Arial', sans-serif;  
}
.fade {
  height: 1px;
  color: red;
  color: $color;
  background-image: linear-gradient(
    90deg,
    rgba($color, 0),
    rgba($color, 1) 50%,
    rgba($color, 0) 100%);
}
.v-slide-group__content {
  justify-content: space-around;
}
.margin-auto {
  margin: auto !important;
}
.hero-image {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.main-logo {
  margin: auto;
  margin-bottom: 10%;
  opacity:0.6;
}
.hero-text {
  z-index: 1000;
  position: absolute;
  bottom:0;
  width: 100%;
}
.fs150 {
  font-size: 150%;
}
.fs135 {
  font-size: 135%;
}
.fs120 {
  font-size: 120%;
}
.event-image {
  border-radius: 8px;
}
.event-date {
  font-size: 80%;
  min-width: 64px;
}
.event-day {
  font-size:220%;
  line-height: 1;
}
.rel {
  position: relative;
}
.event-icon {
  background: rgba(248,237,235,1);
  padding: 4px;
  border-radius: 6px;
  position: absolute;
  right: 16px;
  top: -28px;
  border: rgba(255,181,167,1) 1px solid;
}
.v-carousel, .v-carousel__item {
  height: auto !important;
}
.v-carousel__controls {
  margin-bottom: 10px;
}
.v-dialog .v-card__title {
  background: radial-gradient(circle, rgba(248,237,235,1) 0%, rgba(255,181,167,1) 100%);
}
.v-overlay {
  z-index: 2003 !important;
}
.v-dialog {
  z-index: 2004 !important;
}

.v-dialog::-webkit-scrollbar {
  width: 6px;
}

.v-dialog::-webkit-scrollbar-track {
  background: #CCC;
}

.v-dialog::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 20px;
}
.v-card__text ul {
  margin-bottom: 30px;
}
</style>