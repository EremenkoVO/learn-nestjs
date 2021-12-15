import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';

/**
 * Контроллер для управления ревью
 */
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewSevice: ReviewService) {}
  /**
   * Создание ревью
   * @param dto модель ревью
   */
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewSevice.create(dto);
  }

  /**
   * Удаление ревью
   * @param id id ревью
   */
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleteDoc = await this.reviewSevice.delete(id);
    if (!deleteDoc) {
      throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }

  @Get('byProduct/:productId')
  async getByProduct(@Param('productId') productId: string) {
    return this.reviewSevice.findByProductId(productId);
  }
}
