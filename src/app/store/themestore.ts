import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
<<<<<<< HEAD
  isDarkMode: true,
=======
  isDarkMode: false,
>>>>>>> 36e892026aaae30f6846dcaad74bf1eb87a1bdd4
};

export const ThemeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    toggleDarkMode() {
      patchState(store, { isDarkMode: !store.isDarkMode() });
    },
  }))
);