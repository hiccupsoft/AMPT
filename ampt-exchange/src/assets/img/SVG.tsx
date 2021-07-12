import React from 'react'

const ArrowSVG: React.FC = () => (
  <svg height="12" viewBox="0 0 8 12" width="8" xmlns="http://www.w3.org/2000/svg">
    <path d="m90.41 22.58-4.58-4.58 4.58-4.59-1.41-1.41-6 6 6 6z" transform="matrix(-1 0 0 1 90.41 -12)" />
  </svg>
)

const MinusSVG: React.FC = () => (
  <svg height="2" viewBox="0 0 12 2" width="12" xmlns="http://www.w3.org/2000/svg">
    <path d="m11.5294118 1.64705882h-11.5294118v-1.64705882h11.5294118z" transform="translate(.235294 .176471)" />
  </svg>
)

const PlusSVG: React.FC = () => (
  <svg height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m19.7647059 14.8235294h-4.9411765v4.9411765h-1.6470588v-4.9411765h-4.94117648v-1.6470588h4.94117648v-4.94117648h1.6470588v4.94117648h4.9411765z"
      transform="translate(-8 -8)"
    />
  </svg>
)

const SwitcherSVG: React.FC = () => (
  <svg height="16" viewBox="0 0 24 16" width="24" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="m23.1816178 5.21394882-4.7448268-4.95923355c-.1550704-.16374747-.3652133-.25471527-.5840415-.25471527-.2202863 0-.430444.09097168-.5854884.25471527l-4.7448268 4.95923355c-.2970962.34265172-.2840515.86725455.0275358 1.19472621.3130384.32597344.8144748.33810274 1.1420011.02880718l3.3390759-3.493238v12.13240369c-.0159419.2395546.0637689.4745758.2202862.6489272.1565211.1758729.3753492.2744249.6043357.2744249.2289826 0 .4478071-.098552.6043356-.2744249.1565173-.1743591.2362285-.4093687.2217369-.6489272v-12.12929859l3.3390759 3.493238c.3289806.29413452.8202625.27290728 1.1246007-.04851719.3043419-.32142448.3202842-.83538846.0362312-1.17807511z" />
      <path d="m9.73650775 9.58234047-3.35418669 3.49324813v-12.15223386c.016014-.23955531-.06405751-.47457716-.22128315-.64892905-.15722937-.1758734-.37704785-.27442569-.60707052-.27442569-.23001895 0-.44983371.09855229-.60707053.27442569-.15722563.17435965-.23729752.40936986-.22274035.64892905v12.12933366l-3.35418669-3.49324812c-.33046938-.29413537-.8239746-.27290806-1.12969008.04851734-.30571921.3214254-.32173359.83539088-.03639516 1.17807848l4.76629929 4.9592479c.15577215.1637479.36686603.254716.58668452.254716.22128315 0 .43239193-.0909719.588138-.254716l4.76629931-4.9592479c.248944-.3472017.2140045-.83236336-.0829826-1.13561611-.2955299-.30475096-.7628539-.33355862-1.09186231-.06822702z" />
    </g>
  </svg>
)

export { ArrowSVG, MinusSVG, PlusSVG, SwitcherSVG }