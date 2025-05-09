import { create } from 'zustand';
import { safeLocalStorage } from '../utils/localStorage';

export type Wish = {
  id: string;
  name: string;
  message: string;
  ownerId: string;
};

type WishesStore = {
  wishes: Wish[];
  ownerId: string;
  addWish: (wish: Omit<Wish, 'id' | 'ownerId'>) => Promise<void>;
  editWish: (id: string, message: string) => void;
  deleteWish: (id: string) => void;
  loadWishes: () => Promise<void>;
};

const LOCAL_WISHES_KEY = 'my_wishes_list';
const LOCAL_OWNER_KEY = 'my_owner_id';

export const useWishesStore = create<WishesStore>((set, get) => {
  // Load or generate ownerId
  let ownerId = safeLocalStorage.getItem(LOCAL_OWNER_KEY);
  if (!ownerId) {
    ownerId = generateRandomId();
    safeLocalStorage.setItem(LOCAL_OWNER_KEY, ownerId);
  }

  return {
    wishes: [],
    ownerId,
    async addWish(newWish) {
      const id = generateRandomId();
      const ownerId = get().ownerId;

      const newEntry = { id, ownerId, ...newWish };

      // Update state
      set((state) => {
        const updated = [...state.wishes, newEntry];
        safeLocalStorage.setItem(LOCAL_WISHES_KEY, JSON.stringify(updated));
        return { wishes: updated };
      });

      // Simulate API POST
      await fakeApiPostWish(newEntry);
    },
    editWish(id, message) {
      set((state) => {
        const updated = state.wishes.map((wish) =>
          wish.id === id ? { ...wish, message } : wish
        );
        safeLocalStorage.setItem(LOCAL_WISHES_KEY, JSON.stringify(updated));
        return { wishes: updated };
      });
    },
    deleteWish(id) {
      set((state) => {
        const updated = state.wishes.filter((wish) => wish.id !== id);
        safeLocalStorage.setItem(LOCAL_WISHES_KEY, JSON.stringify(updated));
        return { wishes: updated };
      });
    },
    async loadWishes() {
      const stored = safeLocalStorage.getItem(LOCAL_WISHES_KEY);
      const localWishes: Wish[] = stored ? JSON.parse(stored) : [];

      // Simulate API GET (merge with local)
      const apiWishes = await fakeApiGetWishes();

      const combined = [...apiWishes, ...localWishes];
      set({ wishes: combined });
    },
  };
});

// Helpers
function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

// Fake API handlers (mock)
async function fakeApiPostWish(wish: Wish) {
  console.log('POST to API:', wish);
  return new Promise((resolve) => setTimeout(resolve, 500));
}

async function fakeApiGetWishes(): Promise<Wish[]> {
  console.log('GET from API');
  return new Promise((resolve) =>
    setTimeout(() => resolve([]), 500)
  );
}
