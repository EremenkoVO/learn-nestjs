import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

/**
 * Контроллер для авторизации только для админов
 */
@Controller('auth')
export class AuthController {
  /**
   * Регистрация пользователя
   * @param dto dto пользователя
   */
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  /**
   * Авторизация
   * @param dto dto пользователя
   */
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
