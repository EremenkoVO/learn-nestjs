import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TopPageModel } from './top-page.model';
import { FindTopPagesDto } from './dto/find-top-pages.dto';
import { IdValidationPipe } from 'src/pipes/ad-validation.pipe';
import { CreateTopPageDto } from './dto/create-top-page.dto';
import { TopPageService } from './top-page.service';
import { NOT_FOUND_TOP_PAGE_ERROR } from './top-page.constants';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

/**
 * Контроллер для управления страницами
 */
@Controller('top-page')
export class TopPageController {
  constructor(private readonly topPageService: TopPageService) {}
  /**
   * Создание страницы
   * @param dto модель страницы
   */
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateTopPageDto) {
    return this.topPageService.create(dto);
  }

  /**
   * Получение страницы
   * @param id id страницы
   */
  @Get(':id')
  async get(@Param('id', IdValidationPipe) id: string) {
    const page = await this.topPageService.findById(id);
    if (!page) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
    return page;
  }

  /**
   * Получение страницы по алиасу
   * @param alias алиас
   */
  @Get('byAlias/:alias')
  async getByAlias(@Param('alias') alias: string) {
    const aliasPage = await this.topPageService.findByAlias(alias);
    if (!aliasPage) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
    return aliasPage;
  }

  /**
   * Удаление страницы
   * @param id id страницы
   */
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', IdValidationPipe) id: string) {
    const deletedPage = await this.topPageService.deleteById(id);
    if (!deletedPage) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
  }

  /**
   * Обновление текущей страницы
   * @param id id страницы
   * @param dto модель страницы
   */
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async patch(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: CreateTopPageDto,
  ) {
    const updatedPage = await this.topPageService.updateById(id, dto);
    if (!updatedPage) {
      throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
    }
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPagesDto) {
    return this.topPageService.findByCategory(dto.firstCategory);
  }
}
