// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

import { AnimalInfoCard } from 'src/components/AnimalInfoCard';

export const resources = {
  en: {
    translation: {
      errors: {
        unexpected_error: 'Unexpected error. We automatically register errors and will fix everything soon',
        'Failed to fetch': 'Connection error. Go to the server directory and start the server using the start script',
        is_required: 'Required field',
        invalid_email_address: 'Invalid email address',
        too_short_password: 'The password is too short',
        not_same_password: "Passwords don't match",
        ERR_DUPLICATE_VALUE_OF_FIELD: 'There is already a user with this nickname',
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Incorrect password or email',
        ERR_NOT_FOUND: 'An entity with this id was not found',
        ERR_USER_NOT_REGISTER: 'Register to access this feature',
        ERR_INCORRECT_PASSWORD: 'Invalid password',
        ERR_ACCOUNT_ALREADY_EXIST: 'An account with this email already exists',
        ERR_INVALID_PASSWORD: 'The password must contain at least 8 characters',
        ERR_INVALID_EMAIL: 'Invalid email',
        ERR_TOKEN_REQUIRED_ERROR:
          'The token is required. Check the request to the server, maybe there is no authorization token in it',
        ERR_JWT_ERROR: 'You are not logged in, log in to your account and try again',
        ERR_DATA_BASE_ERROR: 'Database server error. We automatically register all errors and will fix everything soon',
        INTERNAL_SERVER_ERROR: 'Server error. We automatically register all errors and will fix everything soon',
        ERR_INVALID_NICKNAME:
          'The alias must be at least 7 characters and can contain only numbers, letters and an underscore',
      },
      screens: {
        ProfileScreen: {
          title: 'Profile',
          updateProfile: {
            title: 'Change profile',
            success: 'Profile changed successfully',
            save: 'Save',
          },
          changePassword: {
            title: 'Change password',
            success: 'Password changed successfully',
            save: 'Change',
          },
        },
        ExamplesScreen: {
          title: 'Examples',
        },
        LessonsScreen: {
          title: 'Lessons',
        },
        auth: {
          title: 'Authentication',
          signIn: {
            title: 'Sign in',
            submit: 'Sign in',
          },
          signUp: {
            title: 'Sign out',
            submit: 'Sign out',
          },
        },
        HomeScreen: {
          title: 'Manage panel',
        },
        Settings: {
          title: 'Settings',
        },
        Cabinet: {
          title: 'Cabinet',
          patients: 'My patients',
          table: 'Table',
          healthy: 'My healthy patients',
        },
        TeachersScreen: {
          title: 'Teachers',
          desc: "Someday there will be teachers' cards here, but that's not for sure",
        },
      },
      forms: {
        AuthForm: {
          nickname: {
            title: 'Nickname',
            placeholder: 'Enter Nickname',
          },
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
        },
        ChangePasswordForm: {
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          newPassword: {
            title: 'New password',
            placeholder: 'Enter new password',
          },
          repeatPassword: {
            title: 'Repeat password',
            placeholder: 'Repeat password',
          },
        },
        EmailForm: {
          email: {
            title: 'Email',
            placeholder: 'Enter email',
          },
        },
        AnimalForm: {
          name: {
            title: 'Name',
            placeholder: 'Enter name',
          },
          comment: {
            title: 'Comment',
            placeholder: 'Enter comment',
          },
          type: {
            title: 'Type',
            placeholder: 'Enter type',
          },
          age: {
            title: 'Age',
            placeholder: 'Enter age',
          },
          diseases: {
            title: 'Diseases',
            placeholder: 'Enter diseases',
          },
        },
        MedicineForm: {
          name: {
            title: 'Name',
            placeholder: 'Enter name',
          },
          heal: {
            title: 'Heal',
            placeholder: 'Enter diseases',
          },
        },
        DiseaseForm: {
          name: {
            title: 'Name',
            placeholder: 'Enter name',
          },
          desc: {
            title: 'Description',
            placeholder: 'Enter description',
          },
          type: {
            title: 'Type',
            placeholder: 'Enter type',
          },
        },
        ProfileForm: {
          nickname: {
            title: 'Nickname',
            placeholder: 'Come up with a pseudonym for yourself',
          },
          about: {
            title: 'About',
            placeholder: 'Write something about yourself',
          },
        },
        RepeatPasswordForm: {
          password: {
            title: 'Password',
            placeholder: 'Enter password',
          },
          repeatPassword: {
            title: 'Repeat password',
            placeholder: 'Repeat password',
          },
        },
      },
      fields: {
        string: 'String value',
      },
      hooks: {
        useModalPrevent: {
          title: 'Data will be lost, continue?',
          ok: 'Ok',
          cancel: 'Cancel',
        },
      },
      components: {
        AnimalInfoCard: {
          age: 'Age',
          comment: 'Comment',
          diseases: 'Diseases',
          name: 'Name',
        },
        DiseasesManagePanel: {
          title: 'Diseases',
          empty: 'Empty',
        },
        MedicinesManagePanel: {
          title: 'Medicines',
          empty: 'Empty',
        },
        AnimalModalAddForm: {
          title: 'Add a patient',
          success: 'Patient successfully added',
          submit: 'Add',
        },
        AnimalModalUpdateForm: {
          title: 'Edit a patient',
          success: 'The patient has been successfully updated',
          submit: 'Save',
        },
        MedicineModalAddForm: {
          title: 'Add a medicine',
          success: 'Medicine successfully added',
          submit: 'Add',
        },
        MedicineModalUpdateForm: {
          title: 'Edit a medicine',
          success: 'The medicine has been successfully updated',
          submit: 'Save',
        },
        DiseaseModalAddForm: {
          title: 'Add a disease',
          success: 'Disease successfully added',
          submit: 'Add',
        },
        DiseaseModalUpdateForm: {
          title: 'Edit a disease',
          success: 'The disease has been successfully updated',
          submit: 'Save',
        },
        ManagePanel: {
          convalescents: 'Convalescents',
          doctors: 'Doctors',
          healthy: 'Healthy',
          empty: 'Empty',
        },
        AnimalTypeSelect: {
          placeholder: 'Choose the type of animal',
        },
        DiseaseTypeSelect: {
          placeholder: 'Choose the type of disease',
        },
        RemoveButton: {
          title: 'Data will be lost, delete?',
          ok: 'Remove',
          cancel: 'Cancel',
        },
        RangeInputs: {
          from: 'From',
          to: 'To',
        },
        InputIntRangeList: {
          title: 'Range',
        },
        NumberInput: {
          float: {
            placeholder: 'Fractional number',
          },
          integer: {
            placeholder: 'Integer',
          },
        },
        login: {
          enter: 'Login',
          leave: 'Logout',
        },
        header: {
          nav: 'Navigation',
          root: 'Manage panel',
          settings: 'Settings',
          cabinet: 'Cabinet',
          profile: 'Profile',
        },
      },
      enums: {
        ExampleKey: {
          modal: 'Modal',
          movable: 'Movable',
          sortableList: 'Sortable List',
          waveSlider: 'Wave Slider',
          inputs: 'Inputs',
        },
        LessonKey: {
          generator: 'Generators iterators',
          patterns: 'Patterns',
          restApi: 'Rest Api',
          babel: 'Babel + typescript',
          socketsAndWorkers: 'Web sockets & Web workers',
          graphql: 'Graphql',
        },
        AnimalType: {
          Cat: 'cat',
          Dog: 'dog',
          Bird: 'bird',
        },
        DiseaseType: {
          broken: 'broken',
          cold: 'cold',
          stomach: 'stomach',
          parasites: 'parasites',
        },
      },
    },
  },
  ru: {
    translation: {
      errors: {
        unexpected_error: 'Неожиданная ошибка. Мы автоматически регистрируем ошибки и скоро все исправим',
        'Failed to fetch':
          'Ошибка соединения. Перейдите в директорию server и запустите сервер с помощью скрипта start',
        is_required: 'Обязательное поле',
        invalid_email_address: 'Некорректный email адрес',
        too_short_password: 'Слишком короткий пароль',
        not_same_password: 'Пароли не совпадают',
        ERR_DUPLICATE_VALUE_OF_FIELD: 'Уже есть пользователь с таким ником',
        ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Некорректный пароль или email',
        ERR_NOT_FOUND: 'Сущность с таким id не найдена',
        ERR_USER_NOT_REGISTER: 'Зарегистрируйтесь, чтобы получить доступ к этой функции',
        ERR_INCORRECT_PASSWORD: 'Некорректный пароль',
        ERR_ACCOUNT_ALREADY_EXIST: 'Аккаунт с таким email уже существует',
        ERR_INVALID_PASSWORD: 'Пароль должен содержать от 8 символов',
        ERR_INVALID_EMAIL: 'Некорректный email',
        ERR_TOKEN_REQUIRED_ERROR: 'Токен обязателен. Проверьте запрос к серверу, возможно в нем нет токена авторизации',
        ERR_JWT_ERROR: 'Вы не авторизованы, войдите в учетную запись и повторите попытку',
        ERR_DATA_BASE_ERROR:
          'Серверная ошибка базы данный. Мы автоматически регистрируем все ошибки и скоро все исправим',
        INTERNAL_SERVER_ERROR: 'Серверная ошибка. Мы автоматически регистрируем все ошибки и скоро все исправим',
        ERR_INVALID_NICKNAME:
          'Псевдоним должен быть от 7 символов и может содержать только числа, буквы и символ нижнего подчеркивания',
      },
      screens: {
        ProfileScreen: {
          title: 'Профиль',
          updateProfile: {
            title: 'Изменить профиль',
            success: 'Профиль успешно изменен',
            save: 'Сохранить',
          },
          changePassword: {
            title: 'Изменить пароль',
            success: 'Пароль успешно изменен',
            save: 'Изменить',
          },
        },
        ExamplesScreen: {
          title: 'Примеры',
        },
        LessonsScreen: {
          title: 'Уроки',
        },
        auth: {
          title: 'Аутентификация',
          signIn: {
            title: 'Войти',
            submit: 'Войти',
          },
          signUp: {
            title: 'Зарегистрироваться',
            submit: 'Зарегистрироваться',
          },
        },
        HomeScreen: {
          title: 'Панель управления',
        },
        Settings: {
          title: 'Настройки',
        },
        Cabinet: {
          title: 'Кабинет',
          patients: 'Мои пациенты',
          table: 'Стол',
          healthy: 'Мои здоровые пациенты',
        },
        TeachersScreen: {
          title: 'Преподаватели',
          desc: 'Когда-нибудь здесь появятся карточки преподавателей, но это не точно',
        },
      },
      forms: {
        AuthForm: {
          nickname: {
            title: 'Никнэйм',
            placeholder: 'Укажите никнэйм',
          },
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
        },
        ChangePasswordForm: {
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          newPassword: {
            title: 'Новый пароль',
            placeholder: 'Укажите новый пароль',
          },
          repeatPassword: {
            title: 'Повторите пароль',
            placeholder: 'Повторите пароль',
          },
        },
        EmailForm: {
          email: {
            title: 'Email',
            placeholder: 'Укажите email',
          },
        },
        AnimalForm: {
          name: {
            title: 'Имя',
            placeholder: 'Укажите имя',
          },
          comment: {
            title: 'Комментарий',
            placeholder: 'Укажите комментарий',
          },
          type: {
            title: 'Тип',
            placeholder: 'Укажите тип',
          },
          age: {
            title: 'Возраст',
            placeholder: 'Укажите возраст',
          },
          diseases: {
            title: 'Заболевания',
            placeholder: 'Укажите заболевания',
          },
        },
        MedicineForm: {
          name: {
            title: 'Имя',
            placeholder: 'Укажите имя',
          },
          heal: {
            title: 'Лечит',
            placeholder: 'Укажите заболевания',
          },
        },
        DiseaseForm: {
          name: {
            title: 'Название',
            placeholder: 'Укажите название',
          },
          desc: {
            title: 'Описание',
            placeholder: 'Укажите описание',
          },
          type: {
            title: 'Тип',
            placeholder: 'Укажите тип',
          },
        },
        ProfileForm: {
          nickname: {
            title: 'Псевдоним',
            placeholder: 'Придумайте себе псевдоним',
          },
          about: {
            title: 'О себе',
            placeholder: 'Напишите что-нибудь о себе',
          },
        },
        RepeatPasswordForm: {
          password: {
            title: 'Пароль',
            placeholder: 'Укажите пароль',
          },
          repeatPassword: {
            title: 'Повторите пароль',
            placeholder: 'Повторите пароль',
          },
        },
      },
      fields: {
        string: 'Строковое значение',
      },
      hooks: {
        useModalPrevent: {
          title: 'Данные будут потеряны, продолжить?',
          ok: 'Добро',
          cancel: 'Отмена',
        },
      },
      components: {
        AnimalInfoCard: {
          age: 'Возраст',
          comment: 'Комментарий',
          diseases: 'Заболевания',
          name: 'Имя',
        },
        DiseasesManagePanel: {
          title: 'Заболевания',
          empty: 'Пусто',
        },
        MedicinesManagePanel: {
          title: 'Лекарства',
          empty: 'Пусто',
        },
        AnimalModalAddForm: {
          title: 'Добавить пациента',
          success: 'Пациент успешно добавлен',
          submit: 'Добавить',
        },
        AnimalModalUpdateForm: {
          title: 'Редактировать пациента',
          success: 'Пациент успешно обновлен',
          submit: 'Сохранить',
        },
        MedicineModalAddForm: {
          title: 'Добавить лекарство',
          success: 'Лекарство успешно добавлено',
          submit: 'Добавить',
        },
        MedicineModalUpdateForm: {
          title: 'Редактировать лекарство',
          success: 'Лекарство успешно обновлено',
          submit: 'Сохранить',
        },
        DiseaseModalAddForm: {
          title: 'Добавить заболевание',
          success: 'Заболевание успешно добавлено',
          submit: 'Добавить',
        },
        DiseaseModalUpdateForm: {
          title: 'Редактировать заболевание',
          success: 'Заболевание успешно обновлено',
          submit: 'Сохранить',
        },
        ManagePanel: {
          convalescents: 'Выздоравливающие',
          doctors: 'Доктора',
          healthy: 'Здоровые',
          empty: 'Пусто',
        },
        AnimalTypeSelect: {
          placeholder: 'Выберите тип животного',
        },
        DiseaseTypeSelect: {
          placeholder: 'Выберите тип заболевания',
        },
        RemoveButton: {
          title: 'Данные будут потеряны, удалить?',
          ok: 'Удалить',
          cancel: 'Отмена',
        },
        RangeInputs: {
          from: 'От',
          to: 'До',
        },
        InputIntRangeList: {
          title: 'Диапазон',
        },
        NumberInput: {
          float: {
            placeholder: 'Дробное число',
          },
          integer: {
            placeholder: 'Целое число',
          },
        },
        login: {
          enter: 'Вход',
          leave: 'Выход',
        },
        header: {
          nav: 'Навигация',
          root: 'Панель управления',
          settings: 'Настройки',
          cabinet: 'Кабинет',
          profile: 'Профиль',
        },
      },
      enums: {
        ExampleKey: {
          modal: 'Модальное окно',
          movable: 'Перемещаемый',
          sortableList: 'Сортируемый список',
          waveSlider: 'Слайдер',
          inputs: 'Инпуты',
        },
        LessonKey: {
          generator: 'Генераторы итераторы',
          patterns: 'Паттерны',
          restApi: 'Rest Api',
          babel: 'Babel + typescript',
          socketsAndWorkers: 'Web sockets & Web workers',
          graphql: 'Graphql',
        },
        AnimalType: {
          Cat: 'Код',
          Dog: 'Пёс',
          Bird: 'Птица',
        },
        DiseaseType: {
          broken: 'Перелом',
          cold: 'Переохлаждение',
          stomach: 'Желудок',
          parasites: 'Паразиты',
        },
      },
    },
  },
};
