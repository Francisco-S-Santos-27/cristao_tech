import { useEffect, useState } from "react";

const STORAGE_KEY = "ct_reading_plan_v1";

const ReadingPlan = () => {
  const [started, setStarted] = useState(false);
  const [day, setDay] = useState(0);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      setStarted(data.started || false);
      setDay(data.day || 0);
    }
  }, []);

  const startPlan = () => {
    setStarted(true);
    setDay(1);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ started: true, day: 1 })
    );
  };

  const continuePlan = () => {
    setDay((d) => {
      const nd = d + 1;
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ started: true, day: nd })
      );
      return nd;
    });
  };

  return (
    <div className="bg-muted/20 p-4 rounded-lg">
      <h4 className="font-bold mb-2">Plano de Leitura</h4>
      {!started ? (
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Comece seu plano diário de leitura
          </p>
          <button
            onClick={startPlan}
            className="px-3 py-2 bg-primary text-primary-foreground rounded"
          >
            Iniciar Plano
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <p className="text-sm">Dia {day} do plano</p>
          <button
            onClick={continuePlan}
            className="px-3 py-2 bg-primary text-primary-foreground rounded"
          >
            Continuar
          </button>
        </div>
      )}
    </div>
  );
};

export default ReadingPlan;
