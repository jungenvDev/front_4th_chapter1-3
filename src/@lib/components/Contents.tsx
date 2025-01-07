import { useState } from "react";
import { generateItems } from "../../utils";
import { useNotificationContext } from "../contexts/NotificationContext";
import { useThemeContext } from "../contexts/ThemeContext";
import { ComplexForm } from "./ComplexForm";
import { Header } from "./Header";
import { ItemList } from "./ItemList";
import { NotificationSystem } from "./Notification";

export const AppContent = () => {
  const { theme } = useThemeContext();
  const { notifications } = useNotificationContext();

  const [items, setItems] = useState(generateItems(1000));

  const addItems = () => {
    setItems((prevItems) => [
      ...prevItems,
      ...generateItems(1000, prevItems.length),
    ]);
  };
  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <Header />
      <main className="container mx-auto p-4">
        <ComplexForm />
        <button
          onClick={addItems}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          아이템 추가
        </button>
        <ItemList items={items} onAddItemsClick={addItems} />
      </main>
      <NotificationSystem notifications={notifications} />
    </div>
  );
};
