import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../top-page.model';

export class FindTopPagesDto {
  @IsEnum(TopLevelCategory)
  firstCategory: TopLevelCategory;
}
