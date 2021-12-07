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
import { ConfigService } from '@nestjs/config';
import { TopPageModel } from 'src/top-page/top-page.model';
import { FindTopPagesDto } from './dto/find-top-pages.dto';

/**
 * Контроллер для управления страницами
 */
@Controller('top-page')
export class TopPageController {
  /**
   * Создание страницы
   * @param dto модель страницы
   */
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  /**
   * Получение страницы
   * @param id id страницы
   */
  @Get(':id')
  async get(@Param('id') id: string) {}

  /**
   * Удаление страницы
   * @param id id страницы
   */
  @Delete(':id')
  async delete(@Param('id') id: string) {}

  /**
   * Обновление текущей страницы
   * @param id id страницы
   * @param dto модель страницы
   */
  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {}

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPagesDto) {}
}
