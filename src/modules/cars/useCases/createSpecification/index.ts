import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const spacificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);

const createSpesificationController = new CreateSpecificationController(
    spacificationUseCase
);

export { createSpesificationController };
