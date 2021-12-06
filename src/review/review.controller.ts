import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

/**
 * Контроллер для управления ревью
 */
@Controller('review')
export class ReviewController {
  /**
   * Создание ревью
   * @param dto модель ревью
   */
  @Post('create')
  async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

  /**
   * Удаление ревью
   * @param id id ревью
   */
  @Delete(':id')
  async delete(@Param('id') id: string) {}

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {}
}
