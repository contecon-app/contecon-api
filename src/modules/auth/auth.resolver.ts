import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { Auth } from './models/auth.res';
import { SignInPayload } from './models/sign-in-payload';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth)
  async signIn(@Args('signInInput') signInInput: SignInPayload) {
    return await this.authService.signIn(signInInput);
  }
}
