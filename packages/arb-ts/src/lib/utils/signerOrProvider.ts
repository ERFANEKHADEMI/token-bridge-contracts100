import { Provider } from '@ethersproject/abstract-provider'
import { Signer } from '@ethersproject/abstract-signer'

export type SignerOrProvider = Signer | Provider

/**
 * Utiliy functions for signer/provider union types
 */
export class SignerProviderUtils {
  public static isSigner(
    signerOrProvider: SignerOrProvider
  ): signerOrProvider is Signer {
    return (signerOrProvider as Signer).signMessage !== undefined
  }

  /**
   * If signerOrProvider is a provider then return itself.
   * If signerOrProvider is a signer then return signer.provider
   * @param signerOrProvider
   * @returns
   */
  public static getProvider(
    signerOrProvider: SignerOrProvider
  ): Provider | undefined {
    return this.isSigner(signerOrProvider)
      ? signerOrProvider.provider
      : signerOrProvider
  }

  /**
   * Check if the signer has a connected provider and throw if not
   * @param signer
   */
  public static signerHasProvider(
    signer: Signer
  ): signer is Signer & { provider: Provider } {
    return !!signer.provider
  }
}
