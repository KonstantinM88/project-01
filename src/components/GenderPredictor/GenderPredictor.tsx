import { useState } from "react";

interface GenderApiResponse {
  name?: string;
  gender?: string | null;
  country?: string | null;
  probability?: number;
  remaining_requests?: number;
  remaining_credits?: number;
}

export const GenderPredictor = () => {
  const [name, setName] = useState<string>("");
  const [data, setData] = useState<GenderApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");

  const handleClick = async () => {
    if (!name.trim()) {
      setNameError("Name cannot be empty");
      return;
    }
    setNameError("");
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      if (!res.ok) {
        throw new Error("Failed to fetch gender data");
      }
      const obj: GenderApiResponse = await res.json();
      setData(obj);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const mapGender = (g: string | null | undefined) => {
    if (g === "male") return "мужской";
    if (g === "female") return "женский";
    return g ?? "";
  };

  return (
    <section>
      <h2>Gender Predictor</h2>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Predict Gender
      </button>
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {data && !loading && !error && (
        <div>
          {data.name && <p>Имя: {data.name}</p>}
          {data.gender && <p>Пол: {mapGender(data.gender)}</p>}
          {data.country && <p>Страна: {data.country}</p>}
          {data.probability !== undefined && (
            <p>Вероятность: {data.probability}</p>
          )}
          {(data.remaining_requests ?? data.remaining_credits) !== undefined && (
            <p>
              Остаток запросов: {data.remaining_requests ?? data.remaining_credits}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default GenderPredictor;