import { Router } from "express";

import { createSpesificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpesificationController.handle(request, response);
});

export { specificationsRoutes };
