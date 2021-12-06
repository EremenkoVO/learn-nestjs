import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

/**
 * Контроллер для продуктов
 */
@Controller('product')
export class ProductController {
  /**
   * Создание продукта
   * @param dto модель продукта
   */
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}

  /**
   * Получение продукта
   * @param id id продукта
   */
  @Get(':id')
  async get(@Param('id') id: string) {}

  /**
   * Удаление продукта
   * @param id id продукта
   */
  @Delete(':id')
  async delete(@Param('id') id: string) {}

  /**
   * Обновление текущего продукта
   * @param id id продукта
   * @param dto модель продукта
   */
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: ProductModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindProductDto) {}
}
