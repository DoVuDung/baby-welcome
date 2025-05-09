"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "react-toastify";
import { useWishesStore } from "../../store/wishesStore";
import { getRandomColor } from "../../utils/randomColor";

const WishesSection: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const wishesContainerRef = useRef<HTMLDivElement>(null);

  const { wishes, ownerId, addWish, editWish, deleteWish, loadWishes } =
    useWishesStore();

  useEffect(() => {
    loadWishes();
  }, [loadWishes]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const alreadySubmitted = wishes.some(
      (wish) =>
        wish.ownerId === ownerId ||
        wish.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadySubmitted) {
      toast.info(
        "You have already submitted a wish! You can edit or delete your existing one.",
        {
          position: "top-center"
        }
      );
      return;
    }

    await addWish({ name, message });

    setName("");
    setMessage("");

    setTimeout(() => {
      wishesContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  };

  const handleEdit = (id: string) => {
    const newMessage = prompt("Edit your wish message:");
    if (newMessage) {
      editWish(id, newMessage);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this wish?")) {
      deleteWish(id);
    }
  };

  return (
    <section
      id='wishes'
      className='py-20 bg-gradient-to-b from-lightblue to-mint'
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-5xl font-bold text-center text-gray-800 mb-16 font-comic'>
          Leave Your Wishes ✨
        </h2>
        <div className='max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-2xl'>
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block text-gray-700 mb-3 text-xl'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-babyblue text-lg'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='message'
                className='block text-gray-700 mb-3 text-xl'
              >
                Your Special Message
              </label>
              <textarea
                id='message'
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='w-full px-6 py-4 border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-babyblue text-lg'
              />
            </div>
            <button
              type='submit'
              className='bg-babyblue hover:bg-blue-400 text-black hover:text-white px-8 py-4 rounded-2xl font-bold text-xl transition duration-300 w-full shadow-lg hover:shadow-xl flex items-center justify-center'
            >
              <i className='fas fa-paper-plane mr-3'></i> Send Wish
            </button>
          </form>
        </div>

        {/* Wishes Display */}
        <div
          className='max-w-2xl mx-auto mt-16 space-y-6'
          ref={wishesContainerRef}
        >
          {wishes.map((wish) => (
            <div
              key={wish.id}
              className='bg-white p-8 rounded-2xl shadow-md relative'
            >
              <div
                className='absolute -top-4 -left-4 rounded-full w-10 h-10 flex items-center justify-center shadow-md'
                style={{ backgroundColor: getRandomColor() }}
              >
                <CiHeart />
              </div>
              <h4 className='font-bold text-navblue mb-3 text-xl font-comic'>
                {wish.name}
              </h4>
              <p className='text-gray-700 text-lg'>{wish.message}</p>
              {wish.ownerId === ownerId && (
                <div className='mt-4 flex space-x-4'>
                  <button
                    onClick={() => handleEdit(wish.id)}
                    className='text-sm text-blue-600 hover:underline'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(wish.id)}
                    className='text-sm text-red-600 hover:underline'
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishesSection;
