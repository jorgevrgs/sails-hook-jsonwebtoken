module.exports = {
  // 2 minutes.  You get 2 minutes.
  jwt: {
    /**
     * Set to true an create a pair private/public key:
     *
     * Required Files:
     * config/keys/private.key
     * config/keys/public.key
     *
     * Example:
     * privateFile: true,
     * signOptions: {
     *  algorithm: 'RS256',
     *  expiresIn: '30d'
     * },
     * verifyOptions: {
     *   algorithms: ['RS256']
     * }
     */

    /**
     * When enable use the routes.before hook
     */
    enableRequestHook: true,

    /**
     * Include for compatibility with other login methods
     */
    deleteMeIfLoginFails: true,

    /**
     * Model name in lowercase, i.e. type 'user' for User model
     */
    model: 'user',

    // File certificate extensions
    ext: '.pem',

    /**
     * Set to true an create a pair private/public key in config/keys/public.key
     */
    privateFile: false,
    passphrase: '', // Passphrase for private key
    privateFileName: 'private',

    /**
     * Set to true an create a pair private/public key in config/keys/public.key
     */
    publicFile: false,
    publicFileName: 'public',

    /**
     * @var {string} privateKey
     */
    privateKey: 'super-secret-string', // @TODO: generate a private string

    /**
     * @var {string} publicKey
     */
    publicKey: 'super-secret-string', // @TODO: generate a public string
    signOptions: {
      algorithm: 'HS256',

      /***************************************************************************
       * expressed in seconds or a string describing a time span zeit/ms.        *
       * Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a      *
       * seconds count. If you use a string be sure you provide the time units   *
       * (days, hours, etc), otherwise milliseconds unit is used by default      *
       * ("120" is equal to "120ms").                                            *
       ***************************************************************************/
      expiresIn: '7d',

      /***************************************************************************
       * expressed in seconds or a string describing a time span zeit/ms.        *
       * Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a      *
       * seconds count. If you use a string be sure you provide the time units   *
       * (days, hours, etc), otherwise milliseconds unit is used by default      *
       * ("120" is equal to "120ms").                                            *
       ***************************************************************************/
      // notBefore: '7d',

      // audience: '',
      // issuer: '',
      // jwtid: '',
      // subject: '',
      // noTimestamp: '',
      // header: '',
      // keyid: '',

      /***************************************************************************
       * if true, the sign function will modify the payload object directly.     *
       * This is useful if you need a raw reference to the payload after claims  *
       * have been applied to it but before it has been encoded into a token.    *
       ***************************************************************************/
      // mutatePayload: '',
    },
    verifyOptions: {
      /***************************************************************************
       * List of strings with the names of the allowed algorithms. For instance, *
       * ["HS256", "HS384"].                                                     *
       ***************************************************************************/
      algorithms: ['HS256'],
      /***************************************************************************
       * if you want to check audience (aud), provide a value here. The audience *
       * can be checked against a string, a regular expression or a list of      *
       * strings and/or regular expressions.                                     *
       * Eg: "urn:foo", /urn:f[o]{2}/, [/urn:f[o]{2}/, "urn:bar"]                *
       ***************************************************************************/
      // audience: '',

      /***************************************************************************
       * return an object with the decoded { payload, header, signature }        *
       * instead of only the usual content of the payload.                       *
       ***************************************************************************/
      // complete: '',

      /***************************************************************************
       * (optional): string or array of strings of valid values for the iss      *
       * field.                                                                  *
       ***************************************************************************/
      // issuer: '',

      /***************************************************************************
       * if true do not validate the expiration of the token.                    *
       ***************************************************************************/
      // ignoreExpiration: false,
      // ignoreNotBefore: '',

      /***************************************************************************
       * if you want to check subject (sub), provide a value here                *
       ***************************************************************************/
      // subject: {},

      /***************************************************************************
       * number of seconds to tolerate when checking the nbf and exp claims,     *
       * to deal with small clock differences among different servers            *
       ***************************************************************************/
      // clockTolerance: '',

      /***************************************************************************
       * the maximum allowed age for tokens to still be valid. It is expressed   *
       * in seconds or a string describing a time span zeit/ms.                  *
       * Eg: 60, "2 days", "10h", "7d". A numeric value is interpreted as a      *
       * seconds count. If you use a string be sure you provide the time units   *
       * (days, hours, etc), otherwise milliseconds unit is used by default      *
       * ("120" is equal to "120ms").                                            *
       ***************************************************************************/
      // maxAge: '',

      /***************************************************************************
       * the time in seconds that should be used as the current time for all     *
       * necessary comparisons.                                                  *
       ***************************************************************************/
      // clockTimestamp: '',

      /***************************************************************************
       * if you want to check nonce claim, provide a string value here.          *
       * It is used on Open ID for the ID Tokens.                                *
       ***************************************************************************/
      // nonce: '',
    },
  },
};
