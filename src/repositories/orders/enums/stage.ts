export enum StageOrder {
  Entry = 'Entry',
  Cancelled = 'Cancelled',
  ProductionPlanning = 'ProductionPlanning',
  Completed = 'Completed',
  Preparation = 'preparation',
  PreparationGarments = 'PreparationGarments',
  QA = 'QA',
  PackagingLabeling = 'PackagingLabeling',
}

export const STAGE_ORDER = [
  {
    name: 'Ingreso del pedido',
    value: StageOrder.Entry,
  },
  {
    name: 'Cancelado',
    value: StageOrder.Cancelled,
  },
  {
    name: 'Planificación de la producción',
    value: StageOrder.ProductionPlanning,
  },
  {
    name: 'Completado',
    value: StageOrder.Completed,
    disabled: true,
  },
  {
    name: 'Corte de tela y preparación de materiales',
    value: StageOrder.Preparation,
  },
  {
    name: 'Confección de las prendas',
    value: StageOrder.PreparationGarments,
  },
  {
    name: 'Control de calidad',
    value: StageOrder.QA,
  },
  {
    name: 'Embalaje y etiquetado',
    value: StageOrder.PackagingLabeling,
    disabled: true,
  },
];

export const STAGE_ORDER_VALUE: {
  [key: string]: { name: string; value: StageOrder };
} = {
  [StageOrder.Entry]: STAGE_ORDER[0],
  [StageOrder.Cancelled]: STAGE_ORDER[1],
  [StageOrder.ProductionPlanning]: STAGE_ORDER[2],
  [StageOrder.Completed]: STAGE_ORDER[3],
  [StageOrder.Preparation]: STAGE_ORDER[4],
  [StageOrder.PreparationGarments]: STAGE_ORDER[5],
  [StageOrder.QA]: STAGE_ORDER[6],
  [StageOrder.PackagingLabeling]: STAGE_ORDER[7],
};
