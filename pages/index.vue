<template>
  <div>
  <v-row justify="center" align="center">
      <v-img
        gradient="to top right, rgba(255,181,167,0.3), rgba(109,104,117,0.53)"
        contains src="/images/header.jpg" style="height: 100vh; overflow: hidden; position: relative;" class="bg align-center text-center">
        <v-img src="/rodem - white.svg" width="40%" style="margin: auto; margin-bottom: 10%; opacity:0.6;"></v-img>
        <v-row style="z-index: 1000; position: absolute; bottom:0; width: 100%;" class="pb-8">
          <v-col cols="3" offset="1">
          <h4 class="mb-6 font-family-philosopher red--text" style="font-size: 135%;">
            Танцювальна школа для людей будь-якого віку і рівнів підготовки.<br/>
            Тут кожного вчать техніці, емоціям та цьому прекрасному мистецтву - <br/>
            МИСТЕЦТВУ ТАНЦЮ!
          </h4>
          <v-btn color="red darken-2" class="rounded-pill" dark>Хочу навчитись!</v-btn>
          </v-col>
        </v-row>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="position: absolute; bottom: 0; left: 0; ">
          <path fill="#FFF" fill-opacity="1" d="M0,64L60,53.3C120,43,240,21,360,42.7C480,64,600,128,720,170.7C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </v-img>
  </v-row>
        <v-row style="width: 100%;" class="pb-8">
          <v-col cols="12" >
          <h4 class="mb-6 font-family-philosopher red--text text-center" style="font-size: 135%;">
            Танцювальна школа для людей будь-якого віку і рівнів підготовки.<br/>
            Тут кожного вчать техніці, емоціям та цьому прекрасному мистецтву - <br/>
            МИСТЕЦТВУ ТАНЦЮ!
          </h4>
          <v-btn color="red darken-2" class="rounded-pill" dark>Хочу навчитись!</v-btn>
          </v-col>
        </v-row>

  <v-row class="text-center pt-12 pb-12" justify="center">
    <v-col cols="9">
      <h1 class="red--text text--darken-1 font-family-lobster mb-8">Про клуб</h1>
      <hr class="hr-text" data-content="AND">
      <p class="font-family-philosopher mb-12" style="font-size: 120%;">Якщо вам періодично спадає на думку де можна записатися на танці в Ужгороді то ви звернулися за вірною адресою. Приєднуйтеся до нашої школи танців і отримаєте відпочинок від домашніх турбот та робочої рутини. Ви станете центром уваги будь-якої вечірки, затребуваним партнером для танців. Отримайте масу приємних емоцій. Створіть собі красиве тіло.</p>
      <p class="font-family-philosopher font-weight-bold" style="font-size: 120%;">Родем - це танці для дорослих та дітей, зручний зал в центрі Ужгорода, завжди приємна та привітна атмосфера.</p>
    </v-col>
  </v-row>
  <v-row  style="background: #F8EDEB;">
      <v-img
        gradient="to top right, rgba(248, 237, 235,0.95), rgba(248, 237, 235,0.95)"
        src="/images/smile.jpg" :aspect-ratio="16/1"
        class="bg align-center">
        <v-col cols="9" class="pt-12 pb-12 margin-auto">
          <v-sheet class="mx-auto" color="rgba(0,0,0,0)" show-arrows>
            <v-slide-group v-model="model">
              <v-slide-item v-for="(dance, index) in dances" :key="index" v-slot="{ active, toggle }">
                <v-btn class="mx-2" color="red" text :input-value="active" active-class="darken-4" rounded @click="toggle">
                  {{ dance.title }}
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <v-card class="elevation-0 mt-8" color="rgba(0,0,0,0)">
            <v-card-text>
              <v-row>
                <v-col cols="6" class="black--text font-family-philosopher">
                  <v-fade-transition mode="in-out">
                  <div transition="slide-x-transition" v-if="Number.isInteger(model) && model % 2 === 1">
                    <div class="headline font-weight-bold mb-4">{{ dances[model].title }}</div>
                    <p>{{ dances[model].description }}</p>
                    <div class="headline font-weight-bold mb-4">Розклад занять</div>
                    <p v-for="(schedule, i) in dances[model].time"><strong>{{ schedule.day }}:</strong> {{ schedule.time }}</p>
                    <v-btn color="red darken-2" class="rounded-pill mt-8" dark>Дізнатись більше</v-btn>
                  </div>
                  </v-fade-transition>
                </v-col>
                <v-col cols="6" class="black--text font-family-philosopher">
                  <v-fade-transition mode="in-out">
                  <div v-if="Number.isInteger(model) && model % 2 === 0">
                    <div class="headline font-weight-bold mb-4">{{ dances[model].title }}</div>
                    <p>{{ dances[model].description }}</p>
                    <div class="headline font-weight-bold mb-4">Розклад занять</div>
                    <p v-for="(schedule, i) in dances[model].time"><strong>{{ schedule.day }}:</strong> {{ schedule.time }}</p>
                    <v-btn color="red darken-2" class="rounded-pill mt-8" dark>Дізнатись більше</v-btn>
                  </div>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-img>
  </v-row>
  <v-row class="pt-12 pb-12" justify="center">
    <v-col cols="8">
      <h1 class="red--text text-center text--darken-1 font-family-lobster mb-12">Найближчі події</h1>
      <v-row>
        <v-col cols="6">
          <v-card color="rgba(0,0,0,0)" class="elevation-0">
            <v-img src="/images/children_reading.jpg" contain width="100%" style="border-radius: 8px;"></v-img>
            <div class="d-flex mt-2 mb-2">
              <div class="text-center d-flex align-center justify-center flex-column" style="font-size: 80%; min-width: 64px;">
                <strong style="font-size:220%; line-height: 1;">18</strong>
                <strong>08.2022</strong>
              </div>
              <div div class="flex-grow ml-6">
                <div class="d-flex justify-space-between" style="position: relative;">
                  <div class="flex-grow font-weight-bold font-family-philosopher red--text text--darken-3">Психологія успіху (7-9 р.)<br/>Курс ефективного спілкування</div>
                  <div style="min-width: 64px">
                  <div class="icon" style="background: rgba(248,237,235,1); padding: 4px; border-radius: 6px; position: absolute; right: 16px; top: -28px; border: rgba(255,181,167,1) 1px solid;">
                    <v-icon>mdi-human-male-child</v-icon>
                  </div>
                  </div>
                </div>
                <div class="font-family-philosopher">Вчимось мислити в інтерактивній формі. 5 днів спілкування для впевненості в собі, творчості, йоги та захоплюючих ігор</div>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" class="mt-16">
          <v-card color="rgba(0,0,0,0)" class="elevation-0">
            <v-img src="/images/beautiful_girl.jpg" contain width="100%" style="border-radius: 8px;"></v-img>
            <div class="d-flex mt-2 mb-2">
              <div class="text-center d-flex align-center justify-center flex-column" style="font-size: 80%; min-width: 64px;">
                <strong style="font-size:220%; line-height: 1;">16</strong>
                <strong>06.2022</strong>
              </div>
              <div div class="flex-grow ml-6">
                <div class="d-flex justify-space-between" style="position: relative;">
                  <div class="flex-grow font-weight-bold font-family-philosopher red--text text--darken-3">Майстер-клас<br/>"Прикраса з бісеру"</div>
                  <div style="min-width: 64px">
                  <div class="icon" style="background: rgba(248,237,235,1); padding: 4px; border-radius: 6px; position: absolute; right: 16px; top: -28px; border: rgba(255,181,167,1) 1px solid;">
                    <v-icon >mdi-dance-ballroom</v-icon>
                  </div>
                  </div>
                </div>
                <div class="font-family-philosopher">Створи свою неповторну прикрасу. Вчимось плести браслети, кільця, ланцюжки, сережки</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <v-row style="position: relative; top:14px;">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-0 pt-12" style="background: #EEE">Про нас говорять</h1>
    <v-carousel cycle style="min-height: 300px;" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item interval="10000" v-for="(slide, i) in slides" :key="i">
        <v-sheet color="#EEE" height="100%">
          <v-row class="fill-height text-center" align="center" justify="center">
            <div style="width:60%" class="margin-auto">
              <div><v-img :src="slide.authorImg" :aspect-ratio="1" width="140" class="margin-auto mb-6 rounded-circle"></v-img></div>
              <div class="font-family-philosopher mb-8" style="font-size: 120%;">{{ slide.text }}</div>
              <div class="font-family-lobster" style="font-size: 150%"><a target="_blank" :href="slide.url">{{ slide.author }}</a></div>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-row>
  <v-row style="position: relative;">
    <h1 class="text-center red--text text--darken-1 font-family-lobster margin-auto w-100 mb-4 pt-4" style="position:absolute; z-index: 1999; top: 0px;">Завітай вже сьогодні</h1>
    <div id="map" style="width: 100%; height: 75vh;"></div>
  </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
      <b>Танцювальний клуб "Родем",</b><br/>вулиця О. Фединця 43,<br/>Ужгород`).openPopup()
  },
  data () {
    return {
      model: null,
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
          description: 'Рух - це життя, наш рух-це танець! Танцювальний клуб  RODEM запрошує на групові заняття дітей та підлітків.',
          time: [
            { day: 'Понеділок', time: 'з 16:30 (8-11 років)' },
            { day: 'Вівторок', time: 'з 16:00 (12-16 років)' },
            { day: 'Середа', time: 'з 16:30 (8-11 років)' },
            { day: 'Четвер', time: 'з 16:00 (12-16 років)' },            
          ]
        },
        {
          title: 'Контемп',
          description: 'Головне в контемпі - це задоволення від танцю та імпровізації, ваша свобода самовираження та індивідуальність. Контемпорарі –  різновид сучасного танцю, що поєднує західні і східні методики (класичний танець, джаз модерн, цигун, йога).',
          time: [
            { day: 'Вівторок', time: 'з 18:30 до 20:00' },
            { day: 'Четвер', time: 'з 18:30 до 20:00' },            
          ],
          fullDescription: contemp
        },
        {
          title: 'Танго',
          description: 'Аргентинське танго - це друге дихання ділового міста, його пристрасть і загадкова душа втілена в танці. Танго проникає всередину й досягає сердець тих, хто споглядає за танцівниками, завдяки тим почуттям, які вони вкладають у танець.',
          time: [
            { day: 'Понеділок', time: 'з 18:30 до 20:00' },
            { day: 'Середа', time: 'з 18:30 до 20:00' },
          ],
          fullDescription: tango
        },
        {
          title: 'Бачата',
          description: 'Бачата - дивовижний і неповторний латиноамериканський танець. Еротичність, романтичність, показ почуттів і максимальна близькість партнерів - це ті характерні риси, завдяки яким бачата завоювала серця мільйонів. ',
          time: [
            { day: 'Понеділок', time: 'з 18:30 до 20:00' },
            { day: 'Середа', time: 'з 18:30 до 20:00' },
          ],
          fullDescription: bachata
        },
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
</script>
<style>
.custom-header .v-parallax__content {
  background: linear-gradient(0deg, rgba(0,0,0,0.83) 20%, rgba(0,0,0,0.3) 100%);
}

.bg {
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 30%, #FFCC70 66%, #ffffff 100%);
}
/*
.custom-header .v-parallax__content {
  background: linear-gradient(0deg, rgba(255,181,167,0.83) 0%, rgba(255,181,167,0.3) 100%);
}
*
/*
  background: linear-gradient(90deg, rgba(255,181,167,0.3) 0%, rgba(109,104,117,0.53) 35%, rgba(255,181,167,0.3) 100%);
 248,237,235,0.33
  background: radial-gradient(circle, rgba(248,237,235,0.33) 0%, rgba(255,181,167,0.9) 100%);

*/
.v-parallax__image {
}

.vh100 {
  height: 100vh;
}
.font-family-lobster {
  font-family: 'Lobster', 'Arial', sans-serif;
}
.font-family-philosopher {
  font-family: 'Philosopher', 'Arial', sans-serif;  
}

hr {
  border: 0;
  margin: 1.35em auto;
  max-width: 100%;
  background-position: 50%;
  box-sizing: border-box;
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

.fil0 { fill:#FB0200 }

.v-slide-group__content {
  justify-content: space-around;
}

.margin-auto {
  margin: auto !important;
}

</style>