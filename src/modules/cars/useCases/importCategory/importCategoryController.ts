import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './importCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase){}

  handle(request: Request, response: Response){
    const { file } = request;

    if (!file) {
      return response.status(400).send('File not sent');
    }

    this.importCategoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export {
  ImportCategoryController
};