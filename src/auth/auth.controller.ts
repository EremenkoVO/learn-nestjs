import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

/**
 * Контроллер для авторизации только для админов
 */
@Controller('auth')
export class AuthController {
  /**
   * Регистрация пользователя
   */
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  /**
   * Авторизация
   */
  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
