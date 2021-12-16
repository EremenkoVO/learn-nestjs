import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

/**
 * Контроллер для авторизации только для админов
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  /**
   * Регистрация пользователя
   * @param dto dto пользователя
   */
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const oldUser = await this.authService.finduser(dto.login);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }
    return this.authService.createUser(dto);
  }

  /**
   * Авторизация
   * @param dto dto пользователя
   */
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
