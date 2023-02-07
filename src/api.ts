import Model from './Model';

export function getModels() {
  const models = [
    new Model('100', 'First Model'),
    new Model('200', 'Second Model'),
  ];

  return new Promise<Model[]>((res) => {
    setTimeout(() => res(models), 1000);
  });
}
