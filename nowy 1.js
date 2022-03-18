import { ErrorEnum } from './api_error.js';
import {
  genderEnum,
  language,
  IncomeTypeEnum,
  validatorNamesEnum,
  DOCUMENT_STATUS_ENUM,
} from './enum.js';

export const global_tooltip = {
  [language.pl]: {
    affiliate: {
      title: 'Це приклад підказки',
      body: '<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>',
    },
  },
};

export const global_locale = {
  [language.pl]: {
    stage: {
      stage_0: 'Етап 0 - Реєстрація',
      stage_1: 'Етап 1 – Дані облікового запису',
      stage_2: 'Етап 2 – Персональні дані',
      stage_3: 'Етап 3 - Дані з PIT-11',
      stage_4: 'Етап 4 - Дані з PIT-ZG',
      stage_5: 'Етап 5 - Відрахування',
      stage_6: 'Етап 6 - Переказ 1%',
      stage_7: 'Етап 7 - Дані банківського рахунку',
      stage_8: 'Етап 8 - Відправлення',
    },
    button: {
      yes: 'Так',
      no: 'Ні',
      change: 'Ні, зміни',
      delete_pit: 'Видали PIT-11',
      cancel: 'Скасуй',
      continue_filling_pit11: 'Продовжи заповнення PIT-11',
      add_pit11: 'Додай PIT-11',
      check_status: 'Перевір статус',
      sounds_good: 'Ок, звучить добре 😉',
      understandable: 'Добре, я розумію',
      fill_pit11: 'Заповни PIT-11',
      meet_organization: 'Ознайомся з організацією',
      gender: {
        neutral: 'Нейтральний 🌈',
        male: 'Чоловічий 👨 ',
        female: 'Жіночий 👩',
      },
      try_again: 'Спробуй знову',
      skip: 'Пропусти це',
      confirm: 'Підтвердити',
      accept: 'Підтверджую',
      deny: 'Не підтверджую',
      not_applicable: 'Не відноситься',
      change_response: 'Зміни відповідь'
      change_postal_code: 'Ні, введи свій поштовий індекс ще раз',
      finish: 'Завершити',
      see_you_again: 'До побачення! 👋',
      open_mail: 'Відкрий коробку 📬',
      preview: 'Подивись',
      preview_pit11: 'Подивись PIT-11',
      preview_field: 'Подивись поле',
      summary: 'Підсумок',
      tax_return_summary: 'Підсумок податкової декларації',
      send_tax_return: 'Подай свою податкову декларацію',
      next_pit: 'Додай свій наступний PIT-11',
      next_pit_foreign: 'Додай наступний PIT-11',
      next: 'Далі',
      yes_enter: 'Так, введи',
      change_email: 'Зміни адрес e-mail',
      years: {
        previous: 'Попередні роки',
        current: '2021',
      },
      document: {
        correction: 'Виправлення',
        new: 'Нове',
      },
      marital_status: {
        married: 'У шлюбі 💍',
        widow: 'Вдівець / Вдова',
        single: 'Неодружений / Незаміжня',
      },
      for_whom: {
        single_parent: 'Особа яка самостійно виховує дитину',
        individual: 'Індивідуально',
        with_partner: 'З моєю дружиною / з моїм чоловіком 💍',
        individual_with_departed: 'Індивідуально та для померлого',
      },
      proportional_deduction_method: 'Метод пропорційного відрахування',
      progression_shutdown_method: 'Metoda wyłączenia z progresją',
      next_deduction: 'Наступне відрахування',
      previous_years: 'У попередні роки',
      in_year: 'Рік {{year}}',
      none_of_them: 'Жодне з них',
      donations_and_blood_donation: 'Пожертвування та донорство крові',
      ikze_deduction: 'Відрахування IKZE',
      more: 'Більше',
      twice_and_more: 'Два або більше разів',
      only_once: 'Тільки раз',
      never: 'Ніколи',
    },
    opp: {
      thanks_message: 'Дякую за твою підтримку	  💗', // TODO: change to 💗 to :heartpulse: and use emojiText transformer
    },
    referral: {
      copy_message: `Привіт! Я щойно заповнив свою податкову декларацію з PITBOT. Це було дуже легко! Встанови програму та введи мій код {{code}}! Деталі: https://invite.pitbot.pl/{{code}}`,
    },
    badge: {
      ups: 'Упс',
      hurra: 'Ура',
      bravo: 'Браво',
      super: 'Супер',
      one_percent: 'Твій 1% від податку.',
    },
    affiliate: {
      introduction:
        'Перш ніж ми почнемо, одне коротке запитання. Чи є у тебе реферальний код від друга?',
      write_code: 'Впиши свій код.',
      wrong_code:
        'Код недійсний. Ти можеш ввести його знову або перейти до наступних кроків.',
      success:
        'Круто, твій код вірний! Після створення облікового запису ти отримаєш свій реферальний код, яким зможеш поділитися з друзями 🙌.',
      no_problem:
        'Без проблем! Після створення облікового запису ти отримаєш свій реферальний код, яким зможеш поділитися з друзями 🙌.',
      partnership:
        'Крім того, після завершення ти отримаєш код зі знижкою в один з моїх партнерських магазинів, таких як Zalando Lounge, New Balance, Converse та інші.',
    },
    select: {
      income_type: {
        [IncomeTypeEnum.UnregisteredActivity]:
          'Незадекларована діяльність', // @TODO: change enums to proper english names
        [IncomeTypeEnum.Option2]: 'Продаж нерухомості',
        [IncomeTypeEnum.Option3]: 'Дохід від капіталу',
        [IncomeTypeEnum.Option4]: 'Оренда/лізинг',
        [IncomeTypeEnum.Option5]: 'Відрахування витрат на няню',
        [IncomeTypeEnum.Option6]: 'Дохід неповнолітніх',
        [IncomeTypeEnum.Option7]: 'Авторські права',
        [IncomeTypeEnum.Option8]: 'Господарська діяльність',
        [IncomeTypeEnum.Option9]: 'Криптовалюти',
      },
    },
    chat: {
      introduction:
        'Вітаю в Pitbot👋 👋 Я допоможу тобі швидко та легко заповнити податкову декларацію.📑',
      pronunciation: 'Якими займенниками мені слід звертатися до тебе?',
      we_can_start: 'Чудово, можемо починати! 🚀 ',
      income_pit_11: {
        [genderEnum.male]: 'Ти отримав PIT-11 від свого роботодавця?📋',
        [genderEnum.female]: 'Ти отримала PIT-11 від свого роботодавця?📋',
        [genderEnum.neutral]: 'Чи був якийсь дохід з PIT-11?📋',
      },
      income_pit_11_spouse: 'Чи був у чоловіка/ дружини дохід з PIT-11?📋',
      income_pit_11_deceased:
        'Чи померла особа мала дохід з PIT-11?📋',
      income_pit_zg: {
        [genderEnum.male]: 'Ти працював за кордоном?💶',
        [genderEnum.female]: 'Ти працювала за кордоном?💶',
        [genderEnum.neutral]: 'Чи були якісь надходження з-за кордону?💶',
      },
      income_pit_zg_spouse:
        'Чи був у чоловіка/ дружини дохід з-за кордону?💶',
      income_pit_zg_deceased:
        'Чи померла особа мала дохід з-за кордону?💶',
      incomes_list:
        'Обери які з наведених нижче доходів стосуються тебе.👇',
      incomes_list_spouse:
        'Обери які з наведених нижче доходів стосуються вашого чоловіка/дружини.👇',
      incomes_list_deceased:
        'Обери які з наведених нижче доходів стосуються померлої особи .👇',
      thanks_for_your_time:
        'Дякую за твій час. Залиши будь ласка свою електронну адресу, і я повідомлю, коли це буде можливо 😉',
      calculation_year: 'За який рік ти хочеш подати податкову декларацію?',
      document_type: 'Хочеш подати нову декларацію чи виправлення?',
      marital_status: 'Який твій сімейний стан?',
      for_whom: 'Для кого ти хочещ подати податкову декларацію за 2021 рік?',
      perfect: {
        [genderEnum.male]:
          'Чудово🤘 ! Я можу оформити твою податкову декларацію за 2021 рік! Я надішлю тобі повідомлення, завдяки яким ти будеш впевнений, що не пропустиш жодних термінів і завжди будете в курсі своїх декларацій.📆',
        [genderEnum.female]:
          'Чудово🤘 ! Я можу оформити твою податкову декларацію за 2021 рік! Я надішлю тобі повідомлення, завдяки яким ти будеш впевнена, що не пропустиш жодних термінів і завжди будете в курсі своїх декларацій.📆',
        [genderEnum.neutral]:
          'Чудово🤘 ! Я можу оформити твою податкову декларацію за 2021 рік! Я надішлю тобі повідомлення, завдяки яким ти будеш мати впевненість, що не пропустиш жодних термінів і завжди будете в курсі своїх декларацій.📆',
      },
      email: 'Зараз я створю для тебе обліковий запис. Який у тебе адрес e-mail?',
      check_email:
        'Перевір будь ласка свою електронну пошту. Я надіслав тобі посилання, натиснувши на яке ти зможеш встановати свій PIN-код для програми🔑. Увага! Якщо не бачиш листа, варто перевірити папку СПАМ або ПРОПОЗИЦІЇ.',
      unregistered_email_sent:
        'Я щойно надіслав мейл з привітанням на твою почту, щоб підтримувати з тобою зв’язок! Сподіваюся побачимось наступного року!',
      pin_set: {
        [genderEnum.male]: 'Ти створив номер PIN🔑',
        [genderEnum.female]: 'Ти створила номер PIN🔑',
        [genderEnum.neutral]: 'Номер PIN успішно створений🔑',
      },
      pit_removed: 'PIT видалено.',
    },
    mvp_error: {
      terms:
        'На жаль, я не можу створити для тебе податкову декларацію без створення облікового запису та згоди з Положеннями та Політикою конфіденційності😔. Ти все ще можеш змінити відповідь або завершити чат.',
      income:
        'На жаль, я поки що не обслуговую цей вид доходу😔. PitBot швидко розвивається, і я сподіваюся, що незабаром ми також зможемо допомогти з твоїм випадком.',
      previous_years:
        'На жаль, Pitbot.pl поки не підтримує розрахунки за попередні роки😔. Можеш змінити свою відповідь або завершити і залишити свою адресу електронної пошти, і я повідомлю, коли ця функція стане доступною.',
      correction:
        'На жаль, PITBOT поки не підтримує розрахунки за попередні роки😔. Можеш змінити свою відповідь або завершити і залишити свою адресу електронної пошти, і я повідомлю, коли ця функція стане доступною.',
    },
    stage_1: {
      first_name: 'Як тебе звати?🤝',
      policy_and_rules: 'Прийми Політику конфіденційності та Положення.🔒',
      stage_1_finish: {
        [genderEnum.male]:
          'Ти щойно завершив перший етап💪! Лишився лише крок до розрахунку PIT! Ти можеш перейти далі або переглянути ще раз та відредагувати свої відповіді.',
        [genderEnum.female]:
          'Ти щойно завершила перший етап💪! Лишився лише крок до розрахунку PIT! Ти можеш перейти далі або переглянути ще раз та відредагувати свої відповіді.',
        [genderEnum.neutral]:
          'Перший етап завершено💪! Лишився лише крок до розрахунку PIT! Ти можеш перейти далі або переглянути ще раз та відредагувати свої відповіді.',
      },
    },
    stage_2: {
      last_name:
        'Зараз ти починаєш другий етап. Будь ласка, введи своє прізвище.',
      pesel: {
        enter_pesel: 'Напиши свій номер PESEL 👀',
        wrong_pesel:
          'Переконайся, що твій номер PESEL вірний, і введи його повторно.',
        enter_spouse_pesel: {
          default: 'Напиши номер PESEL чоловіка/дружини.',
          deceased: 'Напиши номер PESEL померлої людини.',
        },
        wrong_spouse_pesel:
          'Переконайся, що номер PESEL вірний і введи його повторно.',
      },
      birth_date: 'Супер😎! Твоя дата народження це{{birth_date}}?',
      spouse_birth_date: {
        default: 'Дата народження чоловіка/дружини {{birth_date}}?',
        deceased: 'Дата народження померлої людини {{birth_date}}?',
      },
      my_birth_date: 'Моя дата народження {{birth_date}}',
      inserted_spouse_birth_date: {
        default: 'Дата народження чоловіка/дружини {{birth_date}}',
        deceased: 'Дата народження померлої людини {{birth_date}}',
      },
      postal_code: {
        enter_postal_code:
          'Введи свій поштовий індекс, і я також доповню інформацію про воєводство, повіт і гміну.',
        spouse_enter_postal_code:
          'Введи поштовий індекс чоловіка/дружини, і я також доповню інформацію про воєводство, повіт і гміну.',
        wrong_postal_code:
          'Я не знайшов такої місцевості у Польщі 😔. Введи поштовий індекс правильно🙏.',
      },
      address: {
        not_found:
          'Для вказаного поштового індексу не знайдено жодної адреси',
        choose_town: 'Будь ласка, вибери місцевість, в який ти живещ🙏.',
        choose_spouse_town:
          'Вибери місцевість, де живе чоловік/дружина.',
        location_info:
          'Круто, здається що це воєводство {{voivodeship}}, повіт {{county}}, гміна {{municipality}}, місцевість {{town}}, я правий🤓?',
        enter_street:
        'Супер, почни писати назву вулиці (miejsce zamieszkania) і обери назву зі списку. Запропонована вулиця з’явиться після введення перших 3 літер.',
        enter_spouse_street:
          'Супер, почни писати назву вулиці (miejsce zamieszkania małżonka) і обери назву зі списку. Запропонована вулиця з’явиться після введення перших 3 літер.',
        enter_building_number: 'Напиши номер будинку.',
        apply_apartment_number: 'Чи в вас є номер квартири?',
        apply_spouse_apartment_number:
          'Чи в чоловіка/дружини є номер квартири?',
        tax_office:
          'Тоді твоя податкова інспекція це {{tax_office}}😎',
        choose_tax_office: 'Обери свою податкову інспекцію.',
      },
      stage_2_finish: {
        [genderEnum.male]:
          'Ти щойно закінчив другий етап, тобто заповнення особистих даних🥳! Можеш перейти далі або переглянути і відредагувати свої відповіді.',
        [genderEnum.female]:
          'Ти щойно закінчила другий етап, тобто заповнення особистих даних🥳! Можеш перейти далі або переглянути і відредагувати свої відповіді.',
        [genderEnum.neutral]:
          'Другий етап завершено, тобто заповнення особистих даних🥳! Можеш перейти далі або переглянути і відредагувати свої відповіді.',
      },
      spouse_first_name: {
        default:
          'Схоже, нам знадобляться дані твого чоловіка/дружини. Як його/ її звати?',
        deceased:
          'Схоже, нам знадобляться дані померлої людини. Як її/ його звали?',
      },
      spouse_same_last_name: 'Прізвище таке саме?',
      spouse_last_name: {
        default: 'Добре, яке прізвище чоловіка/дружини?',
        deceased:
          'Добре, яке прізвище померлої людини?',
      },
      spouse_same_address: 'Чи в чоловіка/дружини такий сам адрес?',
    },
    stage_3: {
      stage_start: {
        individual:
          'Настав час для наступного етапу! Підготуй свій PIT-11📋, отриманий від роботодавця. Якщо маєш більше, ніж один PIT-11, підготуй всі.',
        with_spouse:
          'Настав час для наступного етапу! Підготуй свій PIT-11📋 і чоловіка/дружини, які ви отримали від роботодавців. Якщо маєш більше, ніж один PIT-11, підготуй всі.',
        with_deceased:
          'Настав час для наступного етапу! Підготуй свій PIT-11📋 і померлої особи, які ви отримали від роботодавців. Якщо маєш більше, ніж один PIT-11, підготуй всі.',
      },
      pit_11_presence:
        'В тебе не було доходів з PIT-11. Правильно?',
      spouse_pit_11_presence:
        'В чоловіка/дружини не було доходів з PIT-11. Правильно?',
      deceased_pit_11_presence:
        'В померлої особи не було доходів з PIT-11. Правильно?',
      spouse_pit_11:
        'Ок. Перейдемо до PIT-11 чоловіка/дружини.',
      deceased_pit_11:
        'Ок. Перейдемо до PIT-11 померлої особи.',
      choose_income_cost:
        'Обери в PIT 11 - Секція D, поле 28 - Інформація про витрати, які не підлягають податковому обліку',
      income_costs: {
        only_one: '1. З одних трудових відносин',
        more_than_one: '2. Більше ніж з одних трудових відносин',
        only_one_big: '3. З одних трудових відносин (збільшені)',
        more_than_one_big: '4. Більше ніж з одних трудових відносин (збільшені)',
        none_selected: 'Нічого не вибрано',
      },
      no_worries:
        'Не хвилюйся😇! Я буду допомогати тобі вас крок за кроком. Самостійно напиши суми в активні поля, так як в твоєму PIT-11, від твого роботодавця.',
      continue_or_delete:
        'Заповни PIT-11 до кінця або видали цей PIT та додай наступний, або перейди далі.',
      draft_pit11: 'Приклад PIT-11',
      all_good:
        'Вся інформація з твого PIT-11 заповнена😁! Відтепер у верхній частині екрану будеш бачити суму повернення податку в режимі реального часу. Після етапу відрахування сума може бути ще вище 😉', // TODO: add gender translation
      name_pit:
        'Назови цей PIT назвою роботодавця, щоб було легше відрізнити його від інших.',
      pit_completed:
        'Всі дані заповнені! Можеш переглянути підсумок, додати наступний PIT-11 або перейти далі.', // TODO: add gender translation
      pit_completed_married:
        'Всі дані PIT заповнені! Можеш переглянути підсумок, додати наступний PIT-11 або перейти далі і додати дані з PIT-11 чоловіка/дружини.', // TODO: add gender translation
      pit_completed_deceased:
        'Всі дані PIT заповнені! Можеш переглянути підсумок, додати наступний PIT-11 або перейти далі і додати дані з PIT-11 померлої особи.', // TODO: add gender translation
    },
    stage_4: {
      stage_start:
        'Час для наступного етапу! Розраховуй свій іноземний дохід з допомогою додатку PIT ZG',
      choose_country: 'Обери країну працевлаштування за кордоном.',
      date_range:
        'Як довго ти був там затруднений? Обери дату початку, а потім дату закінчення роботи. Якщо ти працював декілька періодів протягом року, ти зможеш додати ще один період на наступному кроці.', // TODO: add gender translation
      another_date: 'Хочещ додати ще один період роботи?',
      calculation_method:
        'Обери метод розрахунку іноземного доходу',
      total_employment_income:
        'Введи загальний дохід від роботи {{currency}}.',
      advance_income_tax_payment: 'Напиши суму авансу з податку на прибуток',
      total_deducted_income:
        'Твій дохід в перерахунку це {{total_deducted_income}} злотих!',
      tax_netherlands:
        'Ти хочеш сплатити податки також за кордоном? Це може бути навіть {{total_tax_netherlands}} повернення податку!',
      tax_netherlands_tip:
        'Я допоможу тобі з розрахунком! Я напишу, що робити далі, як тільки ти надішлеш цю декларацію.',
      another_foreign_tax:
        'Бажаєш додати ще один дохід від працевлаштування за кордоном?',
      spouse_choose_country: {
        default: 'Обери країну працевлаштування чоловіка/дружини за кордоном.',
        deceased: 'Обери країну працевлаштування померлої особи за кордоном.',
      },
      spouse_date_range: {
        default:
          'Як довго чоловік/дружина там працює? Обери дату початку, а потім дату закінчення роботи. Якщо чоловік/дружина працював протягом року кілька періодів, на наступному кроці зможеш додати ще один період.',
        deceased:
          'Як довго померла особа там працювала? Обери дату початку, а потім дату закінчення роботи. Якщо померла особа працювала протягом року кілька періодів, на наступному кроці зможеш додати ще один період.',
      },
      spouse_total_deducted_income: {
        default:
          'Приблизний дохід чоловіка/дружини {{total_deducted_income}} злотих!',
        deceased:
          'Приблизний дохід померлої особи {{total_deducted_income}} злотих!',
      },
      spouse_another_foreign_tax: {
        default:
          'Бажаєш додати ще один дохід чоловіка/дружини від працевлаштування за кордоном?',
        deceased:
          'Бажаєш додати ще один дохід померлої особи від працевлаштування за кордоном?',
      },
    },
    stage_5: {
      stage_start:
        'Заповнення даних з PIT-11 i PIT-ZG вже позаду! Тепер настав час найкращого – відрахувань!',
      stage_start_pit11:
        'Заповнення даних з PIT-11 вже позаду! Тепер настав час найкращого – відрахувань!',
      stage_start_zg:
        'Заповнення даних з PIT-ZG вже позаду! Тепер настав час найкращого – відрахувань!',
      abolition_relief:
        'У мене є гарні новини! У зв’язку з тим, що ви працювали за кордоном, я можу відразу додати відповідні пільги. Повернення податку складає {{return_amount}} злотих! 💰🎉',
      confirm: 'Ти підтверджуєш?',
      submit_abolition_relief_amount:
        'Тоді самостійно введи суму пільги, пов’язаної з роботою за кордоном.',
      other_deductions:
        'Можеш збільшити суму повернення податку, вирахувавши інші витрати. Обери, які з них ти хочеш відрахувати.',
      almost_finished: {
        [genderEnum.male]:
          'Ти пройшов передостанній етап! Ще декілька відповідей, і ти відправиш свою податкову декларацію.',
        [genderEnum.female]:
          'Ти пройшла передостанній етап! Ще декілька відповідей, і ти відправиш свою податкову декларацію.',
        [genderEnum.neutral]:
          'Передостанній етап завершено! Ще декілька відповідей, і ти відправиш свою податкову декларацію.',
      },
      summary_edit:
        'Якщо ти хочеш відредагувати відповіді, натисни кнопку Підсумок. Pamiętaj, że zawsze możesz też wrócić do wybranego etapu kilkając w linię postępu na górze ekranu.',
      child_relief: {
        stage_start:
          'Одним із видів відрахувань є допомога на дітей. У тебе є діти',
        potential_gain:
          'Чудово! Ти можеш отримати до 1112,04 на рік на дитину!',
        kids_amount: 'Скільки в тебе дітей?',
        parent_restriction:
          'Необхідно знати, що цим відрахуванням може скористатися тільки один із батьків.',
        second_parent: 'Чи мати/батько дитини вже скористався цією пільгою?',
        parent_restriction_applied:
          'На жаль, пільгою на дитину може скористатись лише один із батьків.',
        no_worries:
          'Не хвилюйся! Можеш скористатись з інших видів відрахувань.',
        married_restriction:
          'Ви отримаєте допомогу на дитину, якщо ви одружені щонайменше один повний рік і ваш дохід не перевищує 112 000 злотих.',
        full_year: 'Ви були у шлюбі цілий 2021 рік?',
        spouse_income: 'Введи суму доходу твого чоловіка/жінки за рік 2021.',
        relief_rejected:
          'Схоже, ти не можеш скористатись пільгою, оскільки ваш дохід перевищив {{limit}} zł а у вас одна дитина, але можеш перейти до наступних відрахувань.',
        kid_pesel: {
          1: 'Введи номер PESEL першої дитини.',
          2: 'Введи номер PESEL другої дитини.',
          3: 'Введи номер PESEL третьої дитини.',
          4: 'Введи номер PESEL четвертої dziecka.',
          5: 'Введи номер PESEL п'ятої дитини.',
          6: 'Введи номер PESEL шостої дитини.',
          7: 'Введи номер PESEL сьомої дитини.',
          8: 'Введи номер PESEL восьмої дитини.',
          9: 'Введи номерr PESEL дев'ятої дитина.',
          next: 'Введи номер PESEL наступної дитини.',
        },
        second_kid_pesel: 'Введи номер PESEL другої дитини.',
        relief_applied:
          'Круто! Сума повернення {{relief_total}} злотих! 💰🎉',
        currently_studying: 'Чи навчається ваша дитина?',
        age_restriction:
          'Пільга на дитину у віці від 18 до 25 років буде нарахована, якщо дохід вашої дитини був не більший ніж 3089 zł у податковому році 2020.',
        employed_restriction:
          'Ваша дитина працює і заробляє більше цієї суми?',
        employed_restriction_applied:
          'На жаль, у цій ситуації ти не можеш скористатися податковою пільгою, але не хвилюйся. Є й інші види відрахувань, які можуть зменшити твій податок.',
        pension_or_care_allowance:
          'Чи отримує ваша дитина допомогу по догляду або пенсію?',
        previous_relation:
          'Чи є у вашого чоловіка/дружини дитина від попереднього шлюбу?',
        full_year_child_relief: 'Чи діє відрахування протягом усього року?',
        custom_period_child_relief:
          'За яку кількість місяців надається відрахування?',
        children_numeral: {
          first: 'перша',
          second: 'друга',
          third: 'третя',
          fourth: 'четверта',
          fifth: 'п'ята',
          sixth: 'шоста',
          seventh: 'сьома',
          eighth: 'восьма',
          ninth: 'дев'ята',
          next: 'наступна',
        },
      },
      rehab_relief: {
        apply_rehab_relief: 'Бажаєш вирахувати реабілітаційну допомогу?',
        who_is_disabled: 'Хто є інвалідом?',
        disabled_individual: {
          dependant_on_me: 'Особа на моєму утриманні',
          dependant_and_me: 'Я та особа на моєму утриманні ',
          only_me: 'Тільки я',
        },
        disabled_amount:
          'Скільки людей з інвалідністю в вас на утриманні?',
        disabled_income:
          'Введи загальний дохід особи з інвалідністю, яка в тебе на утриманні, за рік 2020. Якщо не було жодних доходів, напиши 0.',
        relief_rejected:
          'Мені шкода, але дохід особи з інвалідністю, не повинен перевищувати 14 400 zł, щоб отримати пільгу. Давай перевіримо, чи ти маєш право на інші відрахування.',
        deduct_drugs: 'Ти хочеш відрахувати витрати на придбання ліків?',
        january_expenses:
          'Введи повні суми витрат на придбання ліків призначених лікарями спеціалістами за кожен місяць окремо. Спочатку напиши суму за січень 2020 року.',
        february_expenses: 'Тепер вводимо суму витрат за лютий 2020 року.',
        march_expenses: 'Тепер напиши суму витрат за березень 2020 року.',
        april_expenses:
          'Тепер напиши суму витрат за квітень 2020 року.',
        may_expenses: 'Тепер напиши суму витрат за травень 2020 року.',
        june_expenses: 'Тепер напиши суму витрат за червень 2020 року.',
        july_expenses: 'Тепер напиши суму витрат за липень 2020 року.',
        august_expenses:
          'Тепер напиши суму витрат за серпень 2020 року.',
        september_expenses:
          'Тепер напиши суму витрат за вересень 2020 року.',
        october_expenses:
          'Тепер напиши суму витрат за жовтень 2020 року.',
        november_expenses:
          'Тепер напиши суму витрат за листопад 2020 року.',
        december_expenses:
          'Тепер напиши суму витрат за грудень 2020 року.',
        assume_expenses:
          'Схоже, що твої витрати кожен місяць були однаковими. Чи заповнити теж всі інші місяці на суму 392zł?',
        expenses_completed:
          'Чудово! Дані були заповнені до грудня 2021.',
        choose_expense: 'Обери, які витрати ти хочеш ще відрахувати.',
        expense: {
          other: 'Інщі витрати',
          car: 'Користування автомобілем',
          dog_guide: 'Витрати на собакy-поводиря',
          guide: 'На поводиря',
          none: 'Жодні',
        },
        expenses_total: 'Введи суму інших витрат у 2020 році.',
        expenses_total_car:
          'Введи загальну вартість користування автомобілем у 2020 році.',
        expenses_total_dog_guide:
          'Будь ласка, надай загальну вартість собаки-поводиря у 2020 році.',
        expenses_total_guide:
          'Напиши суму витрат на поводиря в 2020 році.',
        relief_completed:
          'Усі дані, пов’язані з відрахуванням, уже заповнено!',
        relief_total:
          'Тобі нарахована пільга на реабілітацію! Сума повернення коштів {{rehab_relief_total}} злотих! 💰🎉',
      },
      internet_relief: {
        stage_start: 'Чи хочеш відрахувати витрати на інтернет?',
        restriction:
          'Пільгою можно скористатись тільки 2 рази в житті і тільки 2 рази підряд, тобто наприклад в 2019 і 2020 році.',
        submit_amount: 'Скільки разів ти користувався відшкодуванням за Інтернет?',
        submit_year: 'У якому податковому році ти користувався пільгою?',
        submit_expenses_total:
          'Супер! Отримаєш повернення! Напиши загальну суму витрат на інтернет в 2020 році?',
        try_again:
          'Схоже, введена сума неправильна. Спробуй ще раз.',
        relief_rejected:
          'На жаль, ти відповідаєш вимогам щодо відрахування витрат на інтернет. Давай перевіримо, чи ти маєш право на інші відрахування.',
        relief_applied:
          'Твоє повернення за інтернет {{internet_relief_total}} злотих!',
      },
      photovoltaics_relief: {
        stage_start:
          'Напиши загальну суму витрат, понесених у 2020 році на тепломодернізацію. У відрахування включаються витрати на придбання будівельних матеріалів, обладнання та послуг, пов’язаних із виконанням термомодернізації будівлі та встановлення фотоелектричних панелей..',
        restriction_applied:
          'Максимальний ліміт повернення 53 000 zł, щоб отримати пільгу. Перевіримо, чи ти маєш ви право на інші відрахування.',
        relief_applied:
          'Твоя знижка на термомодернізацію нарахована! Сума повернення {{photovoltaics_relief_total}} злотих! 💰🎉',
      },
      ikze_relief: {
        individually:
          'Введи суму виплати на індивідуальний пенсійний рахунок (IKZE).',
        married:
          'Введи суму виплати на індивідуальний пенсійний рахунок (IKZE).',
        relief_rejected:
          'Введена сума перевищує максимальний ліміт відрахування. Можещ відрахувати максимум 6310,80 злотих.',
        spouse_deposit:
          'Podaj kwotę wpłat Twojego małżonka na Indywidualne Konto Zabezpieczenia Emerytalnego (IKZE).',
        relief_applied:
          'Udało Ci się odliczyć wpłaty na IKZE! Przysługuje Ci zwrot w wysokości {{ikze_relief_total}} zł! 💰🎉',
        relief_applied_married:
          'Udało Ci się odliczyć wpłaty na IKZE Twoje i Twojego małżonka! Przysługuje Wam zwrot w wysokości {{ikze_relief_total}}zł! 💰🎉',
      },
      donations_relief: {
        choose_type: 'Wybierz rodzaje darowizn jakie chcesz odliczyć.',
        type: {
          electronics: 'W formie tabletów i laptopów',
          covid: 'Na przeciwdziałanie COVID-19',
          blood_donation: 'Krwiodastwo',
          charity: 'Cele charytatywno-opiekuńcze',
          religion: 'Cele kultu religijnego',
          public_benefit: 'Cele pożytku publicznego',
        },
        submit_amount: 'Wpisz kwotę przekazanej darowizny.',
        submit_organization:
          'Podaj nazwę organizacji na jaką przeznaczyłeś darowiznę.',
        poland_based: 'Czy wybrana organizacja jest w Polsce?',
        submit_country: 'To w jakim kraju znajduje się ta organizacja?',
        spouse_data:
          'Dodałeś wszystkie swoje dane do odliczeń. Teraz czas na dane Twojej drugiej połowy.',
        choose_type_spouse:
          'Wybierz rodzaje darowizn jakie chce odliczyć Twój/a małżonek/a.',
        submit_amount_spouse:
          'Wpisz kwotę przekazanej przez Twojego/ej małżonka/i darowizny.',
        submit_organization_spouse:
          'Podaj nazwę organizacji na jaką  przeznaczył darowiznę Twój/Twoja mąż/żona.',
      },
      skip_stage_6:
        'Zaraz przejdziesz do kolejnego etapu - Wysyłka. Powodem jest kwota podatku należnego i podatku do zwrotu równa 0 PLN.',
      estimated_deduction_below_average:
        'Szacowane dla Ciebie odliczenia to w sumie aż {{deduction}} zł!',
      estimated_deduction_above_average:
        'Szacowane dla Ciebie odliczenia to w sumie aż {{deduction}} zł! To powyżej średniej, która w Polsce wynosi 524 zł.',
      public_benefit_organization:
        'Mam jeszcze jedną ważną i przyjemną sprawę! Wybrałem organizację pożytku publicznego (OPP), na którą przekazany zostanie 1% Twojego podatku.',
    },
    stage_6: {
      finish_stage:
        'Tym samym zakończyłeś etap przekazywania 1% podatku. Możesz przejść dalej lub zobaczyć podsumowanie.', // TODO: add gender translation
    },
    stage_7: {
      stage_start:
        'To już ostatni etap! Teraz wystarczy, że podasz numer Twojego konta bankowego na jaki chcesz otrzymać zwrot podatku. Pamiętaj, że numer musi być w formacie IBAN.',
      incorrect_bank_account:
        'Wygląda na to, że podany przez Ciebie numer konta jest nieprawidłowy. Wpisz go ponownie.',
      bank_account_currency:
        'Zacznij wpisywać walutę rachunku bankowego wybierz odpowiednią wartość z listy.',
      name_assigned_to_account:
        'Czy Twoje imię i nazwisko jest przypisane do tego konta?',
      submit_account_owner_name: 'Podaj imię właściciela konta.',
      submit_account_owner_surname: 'Podaj nazwisko posiadacza konta.',
      details_filled: 'Dane właściciela konta zostały uzupełnione.',
      finish:
        'Zakończyłeś kolejny etap, gratuluję! Możesz przejść dalej lub zobaczyć podsumowanie.', // TODO: add gender translation
    },
    stage_8: {
      stage_start:
        'Właśnie zakończyłaś wypełnianie wniosku! Możesz wysłać zeznanie lub przejść do podsumowania i edytować odpowiedzi.', // TODO: add gender translation
      submit_previous_year_income:
        'Wyślę za Ciebie zeznanie do Urzędu bezpośrednio i bezpiecznie! Podaj tylko swój przychód za poprzedni rok podatkowy 2020, aby je zweryfikować.',
      field_116:
        'Możesz go znaleźć na Twoim PIT 36 z zeszłego roku - pole 116.',
      all_good:
        'Super, to już wszystko z naszej strony. Poinformujemy Cię jak Twoja deklaracja zmieni status.',
      summary: {
        success_messages: {
          authorization: {
            title: 'Twoja deklaracja uzyskała autoryzajcę 🤗',
            message:
              'Świetnie! Twoja deklaracja została pomyślnie autoryzowana przez Urząd i może zostać pomyślnie wysłana.<strong>Twój zwrot jest coraz bliżej.</strong>',
          },
          success: {
            title: 'Twoja deklaracja została wysłana 🤗',
            message:
              'Brawo! Deklaracja została pomyślnie wysłana. Teraz możesz czekać na zwrot. Pięniądze znajdą się na Twoim koncie <strong>w ciągu 3 tygodni.</strong>',
          },
        },
        error_messages: {
          [DOCUMENT_STATUS_ENUM.AUTHORIZATRION_INVALID]: {
            title: 'Dane personalne wymagają poprawy 🤓',
            message:
              'Niestety Twoja deklaracja nie przeszła autoryzacji i nie może być wysłana. <strong>Musisz poprawić swoje dane personalne.</strong>',
          },
          [DOCUMENT_STATUS_ENUM.DOCUMENT_EXISTS]: {
            title: 'Możesz złożyć jedynie korektę zeznania 🤔',
            message: `Dziwna sprawa, wygląda na to, że Twoje zeznanie jest już w Urzędzie i <strong>możesz złożyć jedynie korektę.</strong>`,
          },
          [DOCUMENT_STATUS_ENUM.PROCESSING_ERROR]: {
            title: 'Ponowna próba wysyłki zeznania 🤓',
            message:
              'Pracuję nad rozwiązaniem problemu z wysyłką Twojego zeznania do Urzędu. Spróbuję ją <strong>wysłać ponownie i dam Ci znać jak się uda!</strong>',
          },
          [DOCUMENT_STATUS_ENUM.INVALID_XML]: {
            title: 'Wystąpił błąd - próbujemy go naprawić 😥',
            message:
              'Pracuję nad rozwiązaniem problemu z wysyłką Twojego zeznania do Urzędu. <strong>Skontaktuję się z Tobą mailowo w tej sprawie!</strong>',
          },
        },
      },
    },
    placeholders: {
      [validatorNamesEnum.email]: 'Впиши електронну адресу',
      [validatorNamesEnum.first_name]: 'Впиши своє ім'я',
      [validatorNamesEnum.bank_account_first_name]: 'Впиши своє ім'я',
      [validatorNamesEnum.last_name]: 'Впиши своє прізвище',
      [validatorNamesEnum.bank_account_last_name]: 'Впиши своє прізвище',
      [validatorNamesEnum.street]: 'Почни вписувати вулицю',
      [validatorNamesEnum.building_number]: 'Впиши номер будинку',
      [validatorNamesEnum.apartment_number]: 'Впиши номер квартири',
      [validatorNamesEnum.income]: 'Впиши дохід',
      [validatorNamesEnum.bank_account_number]:
        'PL 12 3456 7890 1234 5678 9012 3456',
      [validatorNamesEnum.bank_account_currency]:
        'Почни вписувати валюту',
    },
    unknown_error: 'Сталася невідома помилка',
    error: {
      defaults: {
        required: 'Обов'язкове поле',
        minLength: 'Вміст поля занадто короткий',
        maxLength: 'Вміст поля занадто довгий',
        pattern: 'Недійсна форма',
        format: 'Недійсна форма',
      },
      api: {
        internal_api_error: 'Внутрішня помилка сервера. Спробуй ще раз.',
        network_issues: 'Проблема з мережею. Спробуй ще раз.',
        already_logged: 'Ти вже ввійшов на іншому пристрої.',
        [ErrorEnum.global.internal_error]:
          'Внутрішня помилка сервера. Спробуй ще раз.',
        [ErrorEnum.global.wrong_json_body]: 'Недійсний формат JSON',
        [ErrorEnum.global.validator_error]: 'Помилка перевірки',
        [ErrorEnum.global.missing_action]: 'Недійсна дія',
        [ErrorEnum.global.not_found]: '404 Не знайдено',
        [ErrorEnum.global.access_denied]: 'Відсутність доступу',
        [ErrorEnum.global.not_updated]:
          'Не оновлено. спробуйте ще раз',
        [ErrorEnum.global.wrong_token]: 'Неприпустимий токен',
        [ErrorEnum.global.expired_token]: 'Термін дії токена закінчився',
        [ErrorEnum.global.already_done]: 'Дія вже виконана',
        [ErrorEnum.global.exclusive_lock]: 'Закрито для ексклюзивного використання',
        [ErrorEnum.global.wrong_twofa]: 'Неправильна двофакторна аутентифікація',
        [ErrorEnum.global.twofa_missing]: 'Брак двофакторної аутентифікації',
        [ErrorEnum.global.wrong_login]:
          'Невірний логін. Спробуй ще раз',
        [ErrorEnum.global.wrong_password]:
          'Неправильний пароль. Спробуй ще раз',
        [ErrorEnum.global.wrong_login_or_password]:
          'Неправильна адреса електронної пошти або пароль.',
        [ErrorEnum.global.account_disabled]: 'Заблокований обліковий запис',
        [ErrorEnum.global.email_required]: 'Необхідна адреса електронної пошти',
        [ErrorEnum.global.pin_not_same]:
          'PIN-коди не однакові. Спробуй ще раз',
        [ErrorEnum.global.send_mail_error]: 'Помилка надсилання електронної пошти',
        [ErrorEnum.global.wrong_affiliate_id]: 'Невірний ідентифікатор приналежності',
        [ErrorEnum.global.pin_same]:
          'PIN-код повинен відрізнятися від попереднього.',
        [ErrorEnum.global.wrong_affiliate_code]:
          'Недійсний реферальний код. Спробуй ще раз',
        [ErrorEnum.global.terms_accept_required]:
          'Недійсний реферальний код. Спробуй ще раз',
      },
      email: {
        required: 'Необхідна адреса електронної пошти',
        format: 'Неправильний формат електронної пошти',
      },
      pin: {
        required: 'Необхідний PIN-код',
        minLength: 'PIN-код повинен складатися з 6 цифр',
        maxLength: 'PIN-код повинен складатися з 6 цифр',
        pattern: 'PIN-код повинен складатися лише з цифр',
      },
      confirm_pin: {
        different: 'PIN-коди не однакові. Спробуй ще раз.',
      },
      pesel: {
        format: 'Номер PESEL неправильний',
      },
      init_errors: {
        children_missing: 'Бракує дітей',
        postal_code_missing: 'Бракує поштового коду',
        postal_code_or_town_missing: 'Бракує поштового коду або коду міста',
      },
    },
    pit11: {
      headers: {
        ROW: 'Заповніть суму',
        CONTRIBUTIONS: 'Заповніть суму внеску',
      },
      delete_pit: {
        [genderEnum.male]:
          'Якщо ти вирішиш видалити дані з PIT, дані, заповнені на цьому етапі, будуть втрачені. Ти не зможеш скасувати цю операцію.',
        [genderEnum.female]:
          'Якщо ти вирішиш видалити дані з PIT, дані, заповнені на цьому етапі, будуть втрачені. Ти не зможеш скасувати цю операцію.',
        [genderEnum.neutral]:
          'Якщо ти вирішиш видалити дані з PIT, дані, заповнені на цьому етапі, будуть втрачені. Ти не зможеш скасувати цю операцію.',
      },
      descriptions: {
        ROW_29: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 29, 30 або 33, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 29, 30 або 33, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 29, 30 або 33, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_34: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 34, 35 або 33, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 34, 35 або 33, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 34, 35 або 33, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_36: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 36, 37 або 40, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 36, 37 або 40, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 36, 37 або 40, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_41: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 41, 42 або 40, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 41, 42 або 40, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 41, 42 або 40, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_43: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 43 або 46, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 43 або 46, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 43 або 46, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_47: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 47, 48 або 50, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 47, 48 або 50, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 47, 48 або 50, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_51: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 51, 52 або 54, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 51, 52 або 54, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 51, 52 або 54, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_55: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 55, 56 або 58, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 55, 56 або 58, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.netural]:
            'Якщо сума була введена в одне з цих полів: 55, 56 або 58, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація не містить жодної суми - введи 0.',
        },
        ROW_59: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 59 або 61, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 59 або 61, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.netural]:
            'Якщо сума була введена в одне з цих полів: 59 або 61, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_62: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 62, 63 або 61, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 62, 63 або 61, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума введена в одне з цих полів: 62, 63 або 61, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_64: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 64 або 66, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 64 або 66, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 64 або 66, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_67: {
          [genderEnum.male]:
            'Якщо ти вписав суму в одне з цих полів: 67 або 69, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму в одне з цих полів: 67 або 69, усі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
          [genderEnum.neutral]:
            'Якщо сума була введена в одне з цих полів: 67 або 69, то всі інші в цьому рядку необхідно заповнити. Якщо твоя податкова декларація з PIT не містить жодної суми – введи 0.',
        },
        ROW_70: {
          [genderEnum.male]:
            'Якщо ти вписав суму до одного з цих полів: 70, 71 або 74, то всі решта в тому рядку повинні бути заповнені. Якщо твій PIT не містить жодної суми - впиши 0.',
          [genderEnum.female]:
            'Якщо ти вписала суму до одного з цих полів: 70, 71 або 74, то всі решта в тому рядку повинні бути заповнені. Якщо твій PIT не містить жодної суми - впиши 0.',
          [genderEnum.neutral]:
            'Якщо вписана сума до одного з цих полів: 70, 71 або 74, то всі решта в тому рядку повинні бути заповнені. Якщо твій PIT не містить жодної суми - впиши 0.',
        },
        CONTRIBUTIONS_75: {
          [genderEnum.male]:
            'Якщо ти заповнив будь який рядок, що починається з полів 29, 34, 47, 51, 59, 62 або 70, то поля 75 і 79 теж потрібно заповнити.',
          [genderEnum.female]:
            'Якщо ти заповнила будь який рядок, що починається з полів 29, 34, 47, 51, 59, 62 або 70, то поля 75 і 79 теж потрібно заповнити.',
          [genderEnum.neutral]:
            'Якщо заповнено будь який рядок, що починається з полів 29, 34, 47, 51, 59, 62 або 70, то поля 75 і 79 теж потрібно заповнити.',
        },
        CONTRIBUTIONS_76: {
          [genderEnum.male]:
            'Якщо ти заповнив будь який рядок, що починається з полів 36, 41 або 55, то поля 76 i 79 теж потрібно заповнити.',
          [genderEnum.female]:
            'Якщо ти заповнила будь який рядок, що починається з полів 36, 41 або 55, то поля 76 i 79 теж потрібно заповнити.',
          [genderEnum.neutral]:
            'Якщо заповнено будь який рядок, що починається з полів 36, 41 або 55, то поля 76 і 79 теж потрібно заповнити.',
        },
        CONTRIBUTIONS_77: {
          [genderEnum.male]:
            'Якщо ти заповнив поля 92, 93 і 94, то потрібно заповнити поля 77 і 79.',
          [genderEnum.female]:
            'Якщо ти заповнила поля 92, 93 і 94, то потрібно заповнити поля 77 і 79.',
          [genderEnum.neutral]:
            'Якщо поля 92, 93 і 94 заповнені, то потрібно заповнити поля 77 і 79.',
        },
      },
    },
  },
  test: {
    dynamic: 'This is dynamic text with {{some}} vars',
  },
};

const state_language = language.pl;
// STATE GETTER HERE
export const getLocale = lang => global_locale[lang || state_language];