import { useEffect, useRef, useState } from "react";

const users = [
  { name: "stef", age: 20 },
  { name: "frank", age: 35 },
];

export const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (inputRef.current) {
      return inputRef.current.focus();
    }
  }, []);

  const onClick = () => {
    setName("");
    const findUser = users.find((user) => user.name === name);
    setUser(findUser);
  };

  return (
    <div>
      <h3>Find User</h3>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <h4>{user?.name}</h4>
      <h4>{user?.age}</h4>
    </div>
  );
};
