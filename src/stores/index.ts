import { types as t, Instance } from 'mobx-state-tree'
import * as RNLocalize from 'react-native-localize'

// Models
import SettingsStore from './settings/'
import HistoryStore from './history/'
import EngineStore from './engine/'

// Constants
import { Theme } from '../constants/colors'
import { Language } from '../constants/i18n'

const AppStore = t.
  model('AppStore', {
    settings: t.optional(SettingsStore, {
      theme: Theme.LIGHT,
      language: Language[RNLocalize.getLocales()[0].languageCode],
      loggedIn: false
    }),
    history: t.optional(HistoryStore, {
      data: []
    }),
    engine: t.optional(EngineStore, {})
  })
  .actions(self => ({
  }))

export default AppStore.create({})

export interface IAppStore extends Instance<typeof AppStore> {}
