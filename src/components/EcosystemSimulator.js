import React, { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';

const EcosystemSimulator = () => {
  const [organisms, setOrganisms] = useState({
    plants: 50,
    herbivores: 20,
    carnivores: 5,
  });

  const [day, setDay] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDay((prevDay) => prevDay + 1);
      updateEcosystem();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateEcosystem = () => {
    setOrganisms((prevOrganisms) => {
      const newPlants = prevOrganisms.plants * (1 + Math.random() * 0.1);
      const newHerbivores = prevOrganisms.herbivores * (1 + (Math.random() * 0.05 - 0.025));
      const newCarnivores = prevOrganisms.carnivores * (1 + (Math.random() * 0.02 - 0.01));

      return {
        plants: Math.round(newPlants),
        herbivores: Math.round(newHerbivores),
        carnivores: Math.round(newCarnivores),
      };
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Ecosystem Simulator</h1>
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          This is a simplified model and does not reflect the complexity of real ecosystems.
        </AlertDescription>
      </Alert>
      <div className="mt-4">
        <p className="text-lg font-semibold">Day: {day}</p>
        <div className="mt-2">
          <p>Plants: {organisms.plants}</p>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${(organisms.plants / 100) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-2">
          <p>Herbivores: {organisms.herbivores}</p>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-yellow-500 h-4 rounded-full"
              style={{ width: `${(organisms.herbivores / 50) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-2">
          <p>Carnivores: {organisms.carnivores}</p>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-red-500 h-4 rounded-full"
              style={{ width: `${(organisms.carnivores / 20) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemSimulator;
