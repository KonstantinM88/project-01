import { useState, type ReactNode } from "react";
import { CounterContext } from "../context/CounterContext";

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

// SOLID - это принципы проектирования, которые помогают создавать гибкие и поддерживаемые приложения.
// S - Single Responsibility Principle (Принцип единственной ответственности) - каждый класс должен иметь
// одну ответственность и не должен быть перегружен функциональностью.
// O - Open/Closed Principle (Принцип открытости/закрытости) - классы должны быть открыты для расширения, но закрыты для модификации.
// L - Liskov Substitution Principle (Принцип подстановки Лисков) - объекты должны быть заменяемы экземплярами их подтипов без изменения корректности программы.
// I - Interface Segregation Principle (Принцип разделения интерфейсов) - интерфейсы должны быть специфичными для клиента и не содержать методов, которые не нужны клиентам.
// D - Dependency Inversion Principle (Принцип инверсии зависимостей) - модули верхнего уровня не должны зависеть от модулей нижнего уровня, оба должны зависеть от абстракций. Абстракции не должны зависеть от деталей, детали должны зависеть от абстракций.
// Эти принципы помогают создавать код, который легче тестировать, расширять и поддерживать
