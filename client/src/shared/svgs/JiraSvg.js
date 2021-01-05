import React from "react";

const JiraSvg = props => {
  return (
    <svg width="100" height="13.099" viewBox="0 0 100 13.099">
        <image id="jira" width="100" height="13.099" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABJAAAACZCAYAAABwkMDyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAgAElEQVR42u2d229bSZ7fv6J18Z1yu6/TPUN2vENjgARSP+SB2ABi/wXivIVPOk5vkGyyGbOzg51semZFe8bJTnaypneym93AgqknIk9N/QVNAbsgECBp6mWBZmumyZnpy3SP26Rv8l15OHXkY5mSyFN1zqmq8/0AhCWLPKxTpy6/37d+9auJ7e1tkP355g9ufv/XPz35M9YEIYQQQgghhBBCkkiKVbA/L/zhb/7P4WPH/uLsJdRYG4QQQgghhBBCCEkiFJD24cQ7v/zH06+99s9Thw4BwBJFJEIIIYQQQgghhCQRCkh74IpHr35HiEceFJEIIYQQQgghhBCSOCggDeHYuY83j6fT35k5cnTYnykiEUIIIYQQQgghJFFQQNrFsXMfb05OTZ05efr0fm+jiEQIIYQQQgghhJDEQAHJx7FzH28+vHfvzMtvfHOUt1NEIoQQQgghhBBCSCKggCQ4du7jzbs3b555JZPFrrxH+0ERiRBCCCGEEEIIIdZDAQlPxaPj6VkcPXFi3I9TRCKEEEIIIYQQQojVTGxvbye6AjzxCADe/Kf/DFPT00EvtfrRe3DYpAghhBBC4iWXLxUAzAPIin8BYGGPtw8AtMXPTQBdAO1Oq95mTRJCCCFPSbSA5BePTp4+jVczWdlLUkQihBBCCImYXL6UBVAE4ACYU3TZAYBap1Uvs4YJIYQQYDKpN+4XjwDg9GvfUHHZpbOXAIpIhBBCCCHhk8uXHABlqBON/KTxNHqJEEIISTyJFJB2i0cnT5+W2bq2G4pIxFQjfBbu6m3W92oD6It/m51Wvc+aIoQQosGc5QCoAMiwNgghhJBoSNwWtt3iEQC88e1ckOTZB8HtbMQUI7wAd/V2cZR2DaDSadW7rDlCCCExzFnzAKrYO5+RatY7rXqBNU8IIYQk7BS2YeLR1PR0GOIRwNPZiBmGeBXABxhNPAKAJQCf5PIl5oMghBAS9ZzlwE1yvcDaIIQQQqInMQLSMPEIAGZffiXMr6WIRHQ2xGsAzgf8+GUhPhFCCCFRzFlVANfg5iUihBBCSAwkYgvbXuIRAGS+8x3MHDkadhG4nY3oZoiXAVxWcKnvdlr1BmuUEKP6/zyA2QPe1ucR5kSjNluDGwEbB9zCRgghhAisT6K9n3g0NT0dhXgEMLE20csQn4WbeFQFVQAUkAjRq48X8DQRvuf4zmPMyI1cvuT/dQNuQn0vqX5XvNpMrk9Cbs8VxCceEUIIIcSH1RFI+4lHgHv62quZbJRFYiRSsh26gsQlup1WvaaoLKqijzzOqSobIWTs/jwrxhbvNRdDMQYQJzXCPa2xySdDFLXvIoD3Yy4GI5AIIYQQgbURSAeJRwBw9PiJqIvFSKTkUgCwLGPAAsryaaluf0WFZSOEHOxUz4p+XMDoCfDDJA03qfECgGURubQOV1BqcCsckWjnnFsIIYQQjbBSQBpFPAKAyenpOIpHEYnEjeoIhQKrlJBIHOoCgDL0EI0Owi8o9eBuda1RTCJjUAMTZhNCCCFaYZ2ANKp4BABHT5yIq5gUkUicDqhqaOATEm6/deDmLcsYegsZuCc+nhdiUg2umNTl0yX7zFWLrAlCCCFEL1I23cw44tFUPNFHfpbOXmJoNrHG2M+yFghR70Tn8qUu3KPLM5bcVgbudt5PcvlSLSRRm5hPhVVACCGE6Ic1EUjjiEcAMDk9o0OxGYlECCHkGXy5X2yPwFgCsJTLl9YBVJh8m4j2Pw93+2NY9OCeIDiMLOwRawkhhBDlWCEgnfhXm5tbt26dMbT4FJGI8XArCiHKnGcvKX2StoYuAPiAQhIRlBVfbyD6VGPUtiVE3Hm4ghIhhBBCBMYLSCf/4Jebd2/fPjMxMQEA2N7eHulzR08c1+k2KCKRSOi06k1xQpJq45wQIkkuX6rCzRWUVDwh6W2KSImmqHBuqnRa9WqAubIP9xRBQgghhPgwWkA6+a8/2dwS4tE2gAnx/6OKSJpBEYlExQbUnsRGI5sQCUS0QxXuli5CktwXilATfbcBoMjoWEIIIUQtxgpIs/+mt3nvzp0zmJh4KhyBIhIhI9CAWgGpwSolJLDDPAtXhJ1jbRCCgoJrbAAoiCginft+QeJ+m4zSI4QQEgdGCkin/u2vNu/dufN02xpAEYmQ0anBzTGhYpV3AApIhMigWtAlxGTmJT/fgwHikaAA90TCoDTZXAghhERNyrQCv/CHv9m8d/euG3nke2Gvn/fgyePHOt/m0tlLqLF5kjAQIf1VRZdzDDHUCdGOXL5UQ7inTRFiGrL9gXMSIYQQEiJGCUin//2nm/e37p4ZJhSNKyLdu7ul++1SRCKh0WnVKwBWJS+z2mnVGX1ESABy+VIZzHlEiL9PyEYfrXNbFyGEEBIuxghIL/7R55v3t7b2jTwKEomkORSRSGh0WnUHwUWkK+LzhJBgjnKFNUHIM8xKfp72EiGEEBIyRuRAeul7X2w+uLc1NOfRQb/vlRPp/tZdU54RcyKR0Oi06o7YRlPBaFsH1uEei9xk7RESmCrU5CAbhx6Arvi5DeCgbT4F389ZABk+NhIyBcn5rMYqJIQQQsJFewHp5fNfbj64d++Z09YAeRHpyePHePL4MVKHDpnwnCgikdAQYlAhly9lARSFs+jfStAWryaPRCZEjly+5CD8vEc9uAl2mwDanVa9rajss2Js8P6dF+MFk4CTuFlnFRBCCCHho7WA9Er5q82H9+4Fijza/fswEene3bs4euKEKc+KIhIJFcXJtQkhw6mEdN0e3C08tbCEXpGcuCl+fSb/me9I8nnxb5qPmkRIm1VACCGEhI+2AtKr7/5u8+H9+27kkU/9USkibd2+ZZKABFBEIoQQYxHRR6q3gvXgbiutxXlvIpKx6bvXAtyIxgIYoUTChyevEUIIIRGgpYD02h9/vfnowYNnI49CEJHu638S2zAoIhFCiJlUFF5rAFc40jJq0C8o+bbHlsFcSoQQQgghxqLdKWyvf//G5qMHD4aftobRTl8b9XS2rTu3TX1uPJ2NEEIMQpy8pko82QBQ0FU82k2nVe92WvVqp1XPAngLwU9/JIQQQgghMaKVgPT6nww2Hz58eGZfEUihiLT95AluD4yNeqaIRAgh5uAouo4nHhmZ86XTqrc7rboD4BSAC3C34BFCCCGEEAPQRkD65g9ubj4W4hEOEoEUikh3BgOTnx9FJEIIMYOigmsM4IpHxud76bTq/U6rXhFRSedAIYkQQgghRHu0EJC+9ae3Nx89enTmoC1nYYhId27eNP0ZUkQihBCNETmAVGxfK9ogHu2m06rXhJD0LlyRjBBCCCGEaEjsAlLmP9/ZfCzEo1HyFqkWkbafPMHNr782/TlSRCKEEH2ZV3CNVZGY2lpETqcseCQ7IYQQQoiWxHoKW/aHW5uPHz/eOW0NGP0EtZ3fFZzOdvvGDZx84QXTnyVPZyOEED1RISBVk1BRNkZYEUIIIYTYQmwRSG/+6N7mE088CnCCmspIpHt372Dr9m0bnicjkQghRD8Kkp/fMDVpNiGEEEIIsYdYIpD+yZ/d33zy5MnIkUe7fw8jEunGl7/FkePHbXimjEQiJGRy+dJzgoCO24vE0fGzGE3AaAPo275NylAarAKrxo3CiB9pA+gD6HZa9S5rkBBCQhmbZ+FGCmfFaz/6YmzmuKynvetH+2fkK/ew8u/X/mL1OyIXkM5UHm5ub2+fmZiYCLzlbM+/SYhI9+7exdad2zhyjCISIWTH2Sv4BvWFA96/3mnVCzGW1xOKiqLMcwGvA7hHxbeFcNHktiJpFiQ/z+gjs8ePeUgmURf9cl20hSb7JSGESDntRd8YnQ54ncEuW4lzdfjPzf/KHjS35vKlt3VZGBXl92yDbFA7fZdd0NtlF0TSBie2t7cjq7jfu/Bo88mTJ2ewvY1t30vm96F/Q7BrTc3M4I3f+7ZNfW2VIpI2g14FwLLEJZSLE7l8yQGCt4+wxBLJcrU7rXpZQoApiteiDs9ojPoKWuZRWQNQ67TqDZOeqUb9X3aifZuRYdo/Y9nxIwgbAGoAGjqtsubypSqC5f060BnYhx6AUOrgoHHdtvvdPeaKti0bBdnvtOpFS/p6WfTzIFSDzqMajndGtQnhvHv2Uiakr+mJMbkWdEzO5Usyc305LAFBplwytrFYjHGE6BLkucVqP+XypaLPNkhH8JUD0TcbYY41kUUgffvHTzYBSEce7f5dZSTSw/v3Mbj+O6RPv2iLTctIJHKQ8bqQ9HKJI9YrAJYMM97K4hXFhLQIYDGXL/UAVDqtes2StmYEFI+07ouecRvH+DEH4DKAy7l8aUM4pzUNqmU+hv6eCdEpTPT9dlr1vphzZFfLC5aMZWWJuu/Dji3JRQVtfjVCB74cUR/NwF0sXs7lS6vCXuqOeQ2Zcs6GeG9R2uWzYl6V6Wtx2gWeXxGVaOQnLeyRJWGz14RtoDRiORIBKfeT7U0AZ9yE1y66ikj9r77CsRMnMTk9bYt9SxGJkP0HeApH4xlH10REXdmGlVRCAvZFz7id06RIc6JvVuGe2FflFjeikCqAa5LXcOBuszC538tuR13M5UuzFvRNFT5FLeRnVRA2XlyLV54TvyrsJY7Hoz23Sow2rultbpjNvgyg7NkGqtph6Kewnb2Ef5yYmDgz8olqAX9XdTrb9pMn+O2vf2Vbf+TpbIQ8O8iX4e4ZNkk8KsLdsrCswcSaAfB+Ll9qCFGLhO+0EE0MxFy+1BbO9JyGRUyLMaIrxjlCVKBiscCGLWxO0utBLL7JOsi9sKLRcvnSbC5fagD4QBNHfkmMx0WQfe0cMbfqYOOO3SfEFj9d2lzodkGoApIQLb4DYDzhJ2YR6eH9+/jq09/Y1jcpIhFOUK5h0YS77SNtUJkbAN7XsMyLYkKiwBEuFOn06YcfQE/haJjBeDmXL7XZP4ksYtVadstR2gIn2lFwDdOFXRXPMBR/xLfQtqhZnaXhLrpVOZoMfW4VAB8aMrfutguqAD6BGWkaPLugKYTgwIQmIAmx4pnVfZNEpDuDAW73b9jWRykikSRPUPPCsFgwrMxtDY2h3RPSh2JLDxnOQPLzFADi7Ye6OiWjMCf6Z4VPkkiS6CgkMQ6oWMSZk3XeYkbFXF8L4flUoedCm5/zQtTnohB2BJga5A4Zits+P29g1S8AaMsI+qEISMPEIw+TRKTfffYZ7t66aVt/pYhEkjhJzcPNvZA2qMxFUWZTEgheo4i0J7KnohRYhbH1w5oBTskoLNNxITKInHeyYrjJEUhFTa8V5XiYhXyUyIbKUyN9keWmOPJzAJpJH4vF/TdhUCoJX9nLcCOmMgY/Ai8qrhLkw8oFpP3EIw+jRKRPP8ODe/ds67cUkUiSJikTxSPHUKeVIlI4LBq+Ym2kcSvyMSxZdFtz4JZTIoes7WjyNjaV5XYSXAfKtnH5RAjTTnlNtIjke25zBpa9BjcNhi0si3saC6UC0ijikYcpItL29hNs3b79vy3svxSRSBImqSzMFI+uGVzt18RJFOQpTQXXqLAaI+uDXmj6nIW3lxaOCxO6kiCosBuLBo4Jqo/jNnUbm6PgGg1Fz8RYEcJrA0Bi/bAqzMx31IRdi0o7msC4IpIyAWkc8cjDBBFp5tix5S8uv/gvAZyzscFQRCIWO4GzwlAxSTwqwGzxaMdAZMTMM3QVTfAFVmXofdCLWMxYfJte6LrDJ07GodOqtwFsSF7GRPGyaMg1wxwbswqc/lWFx9k3Yb7Iv5i0/HTifpcMK7OpkW7j2pgjt0UlAlIQ8chDZxHp8NGjy4O/y1wEgI/eQw0UkQgxiYpJxoVwXBuW1H0a4Ljio63oOg3msAm9DzZhfr6jUWG0IAmC7Nhu4ja2MMrrJLAOVEUf1WBPhOhyUsZhcZ/LBha9ATsjkoe1xZH6ubSAJCMeeegoIs0cPbp842+/ddFfTopIhBg1SZ03qLyzwii3yXFdEIkGE49Yte8puJS3/YgiEvugMsOYOZFIDCKAMQKSiNQLY1yYM6zvOZKfH4hE7LLPowz7thHVbJ/XfXOsaeWuwe7Io2FtMXvQmyZlvkGFeOQxMTGx8/M2gIkhP8v+PvRvvv/0fpw+fHj5+l+/fnFYOT96D7WzlwDYsc3Ez9LZS8BH7xmb2I8QkyepOPaDbwAYFkqehbrtO5VcvtRgqwSg7rQRLxFyQQhTRN3ziboPru/x/yr74EGkIUQkhVtLiMV0WvVuLl9aA7AocRmTIpDCLKsDQPuFFkXb12oKyjGP6BMYD7B3FLEqYSEj2kHF4qGjDMO2hkcoVq4Le7y9yyaZBeAXmQsR2AdpuIsE+4rbgQUkleKRhw4i0tThw8u/+/lrF/crJ0UkQhIzSfkdvDaeCi67B/XAK0ciXDTsCWpdTEZNAN1RjtAVhtq8mLCCJhBNC4Ooy2aJhsLnnAbwYS5futBp1SusWmkjMWwBd+Drf+1Oq94cw1ny+mAhRKMxI9pnga2BjDGeyQhI6Vy+VFQRkRLy2DAreZ8HUYQBAhLUiGg1Ta6xH71dtlJzxDbit5WCziWBTsMyZI7NQt3WNf/iZ3eXfTm/yx6flyhzAeGJlRtiDG2O0MYae9SnZxeE4T/M5fKlyn72ZSABKQzxyCNOEWn68Mzyl3/16sVRykkRiRAtmQ1ojAVy8BQZp2EZDBtwI5saQSILRHRL2yufELqcAMb0EoDVpDfMTqveyOVLPcUigLdfvRxVm7XQsC0ivO2uawBqQZ3kIX1wXvRBB+q31CwcZDCO6eQFaY8FBF/RX4ea0w55v6MJ/g0xv8i0wyL0z/sXdqRURkT/6R5NKusTbMjeo0jwG4bQP/Dac5AyCvvKsx8rwrl3hC06bv+owE6qkuNcW9jm3SgKG6Jtvhq0ne1qc11RvpqIkvLam0r7spzLl2p71fnYAlKY4pFHHCLS5MzM8pdXXr44TjkpIhGiHeMaF6tCYInLiK2E4AiuA6ioFhREHXmnq9XGdHyW2DR3HM3lENr8B7l8KZTnbjMhG4kV1cauMDrLwpEqB3RQ9mM5ly81FBi3tYDPoyIhqDTjisZL2v16TrPYniwzti/l8qWy5lsno9hq5zl/uo6TWcS8fU2UQXUdDYSwUVXZBsW4X4ErJlXGHKdttZXGWXiUWvxUaJurFGNCsQm8sRhAVUSvlRXamN4OgqFawFhJtKMQjzyiTKw9HUA88mBibUKM5AqANzutuhOXeCQMIpWRDwMA5zqteiFMEaHTqnc7rXoBwHfFd5LRqYZYZwtwhaQmj2cf63moFGDWAbwlxpVuiH2wL8SDrBjLVMJ5n0TZVrTNhRTB9jXt60CgQriRtbMqisfqNQDznVa9EqZI4Run1zhcjDR/vt1p1ec7rXotLvFI8SE8PXFPTtjRUz674C24IpwSLWCvhNojC0hRikceUYhIUzMzy19UX7ooU06KSIQYwwZc4agcVSjsAQaRyvuaD7oSHnCyagjDaIPNavQJHsFDuUdlAe7x7P1cvlTlCVv7GokqbZoLQrxtR9meOq16GWrF3DkKkGTE9teE/OmSOosnUZUto/k4LVsPazL2lqgblWP1uU6rXozKBhTjdNFSP1EFkSx+joEqG21d2OWR3pOwQQoKbfOhvspIAlIc4pFHmCLS1MzM8ud/efqiinJSRCJEe66IlY1u3AURir6qMXU1rvsShtE8mONonDqrKHC6RiENdxXtw1y+1KWYFJqROIC7wliJsU15J6aoMhirth8pTZQhG1myqHFbi1LccnSsADFnZGJuI6q2rg3gRojG4tOI730LjNz2E/ni5wHt3YGaPFurQhDrx9TW+lAnIg2NQjpQQIpTPPIIQ0Samp5e/uxnpy6qLCdFJEK05ZxYqdcFVc7maqdVj93wFGWgiKSvs5DB82JSMamVr9BIHADQYtVUCMiqDMY0zDgZisSPCiG2qOEYkUWw7WsbAQUCR9PnK1uugYw4oHCxzRurY01W7osOoYjk9pWCDou6im1zXexylSLSc/bAvgKSDuKRh0oRaXJ6evnTv5i9GEY5KSIRoh0XdFndEAbRrKJxdV2HSco3WTngdrZR66oJ4EJMX++JSe/n8qXtXL7UyOVL5YRFJ6kwErVwSMI0GBmFREZoc10F7U1HMTtomRoIdjpeWlNRX7ZMKnIfKbkPXcZqUQ4HycYTj7RJoC8WlmSj7TY0s8v7oq3JCpbP3dOeApJO4pGHChFpcmpq+Tc/PXkxzHJSRCJEG9bi3Fqyl2Om4Bo9TY3uAriyNurEXoEeUVuLAC7DjU7qC0HJ2StxoukIJ03F6SqOjkdvKzQY03RyyIjIRiHpuI0taNtvILhootWcrmj7Wk3i+2cV1cm7up1OKrYdX0joeDGAK+jpdvpiRcF9FTS0CdoK7u05gXuogKSjeOQhIyJNTk0t//rPT1yMopwUkQjRYpLS0QFSUSZHx6OPRZmKbHoj15cDvaK20nAFpWsAPhHb3Wq5fKloUTSKCgH3QlynN45hMDqa1BWxHxV9QZt5Q+LY+p7oe1YISArGkJ6kcFOE/Mlr651WvapjpxGLSEmM2i5rtm3NO1RDVizV0i4Xba0KxZGizwlIOotHHkFEpEOTk8u9/3LsYpTlpIhESKxUdBvMFa3oreq2mrZromqCR9aOQ0Hj+soIe+B9ADdy+VJbbHfLmljRotwLkpfZ0DCqcVg/bAC4Ivv8k5wri4zc1voKxjCd2lnQsjR99RHEWdNtG1vc29dU1IWjefdxkjVaYF2nlBIKn8OazotKgrLK/viMgGSCeOQxjoh0aHJyuXfp6MU4ykkRiZBY6Gm66iQ7SQ1gRlQAIxfGcL7EEb8mJCGfg7vd7RNDT3Yra9CHo6QC+a1sFJDIKMjagzptYwvaxxsK6kOL/qZosasq8f2zCJbE3M8F3SJdhsz/bSTrAJKKbgVSlJdUe5tXLO7KRCGlRaQWAJ+AZJJ45DGKiHTo0KHlT358+GKc5aSIRIhxxmxYyBqHVV1DZHdNVF3wVLZx68wB8K5BRd59spsJkUmy/e+KjnmP9mlTfQWG7RKTaZMR2loDFoiVEtvXgGeTZzdNrQOBI/n5DUnxRrYeBlBzQmAUVBIyTPQ0jZ6XbWuruguVfh9CVV2lAODsJVRhmHjksZ+IlDp0aPmXF2cu6lBOy0WkpAx+xBxquhUo7oSUNIqMcMKqAN6CmyTdJDJ4GpnU0HHbk4L+NzCxTYvtArLtqcDeSSKYn3QYN5yAn1vzL+4IoTlIv0uL06BMd6qrMX9/zYTFNtFWukjGgpuugp5sWzPJLpDdZrcTcZ46ewkFuKuIxjJMREqlUsu/qExd1KmcFotIy2cvIUvbiWjChqarAbJOmEmrHJ5RtM7mOHa9tcUkbeoJLYsA3vdFJZm+LcU4hyQEA5fb2MhIfUR27NBgvAg6TjQVOmux9jdFi12yjqqsvVRNWN8xAV1zBMm0tTXD7HLZfHU7OSRTsCSBl19EmkilljeXJy/qWE6LRaQKCOEkFaZB1DDwWdTYHINN8iJR85swV4TzopK6uXypooFjmDSHZPfYIbO9iAISGWXcChp14yc2n0RSOBk2PzcDXituIU32GazJiO3iOcicvrZhklMv+k4T5kUej0NPx2cicvrItDUT7fKGgjpDChaFJgsBafnjH6Uu6lxOS0WkLM0noglNTcslM9YODDjhwZbJVSejsttp1QsA3oa5QlIawDJcISmWRJPCGZuTuMS6aQ7JrnbUl+yLacOSpZP4kBVanRjLHvS7hwoWknmhigbWg0ctRltJxffTXqJdbvMzk30W84ArIGUsaqBrnR9OXDShoEJE+gfaGoQoR7sktyIxZ9JWOWSOMybP1mPTEiHpstjaVoj4u5PqkKgcQwrsiSSCdjYXYzL+oKJNMwRnLRYBSeSvk7FVVCx2JdGpV+HY60xX03LJtLU1E7e1C7FbJtptR0CyybhfPHvJjC15uZ9sX93e3v592hqEKB8cdRzQZVfvTTYsmmyVytq2JyS9CTfp5sDA28gA+CCXL1Uj3KYh2/8aFrQd2W1sjEAiozona5KXiVw8kdy+Vgth7IhrG5t08uqYx+uewdGiNttKut7bfEKfl8xCexZwBaS2ZY30mu4i0rd//OTq9pMn72B7G9vb27bUu23tiJiJrtEZFJCIUiet06o7YiI/BzOjks4DaEa0NaogM6YYnDxblTOrYgwjyUFWcI3Dhg/6nQOR+ymMuogjCkkHAUlmZ4yx9gYjtqNFwc4Ak21bGZ99JwKpYmG70FZE+vaFR1efPH78zrYnHtkhIg1gdoJRQnR2YAcm518BxeVQDc5Oq17zRSW9a5gBOgdXRAp7vk7qKqPKe5ljjyMjIhvtFsc2tqLEvYYlCkQqICnYvtY7QEwbpQwFydswfbzuWjom6GgHSo0xsm3d4OeRBoDUR++hCztPBdNORDpTeXj18ePHO5FHFolIZdGOCCHDkQlFN1qAMVz8MqqeO616tdOqz+OpmLRmQNHTAK6FJSKJbSBJXWVUOpYwkTYZcSySTdoORCieCNFC5elru6kFvPZixEKabJ2rWEiW3bZnur3RtnhM0I2CxGfXDX8kUs8jly8VUoDVR8trIyKdWX5w9fGjR89FHlkgIp0T7YcQsjcyq/c2OLAMy47WWPPEpCKAUwC+C+AK9D4mOCwRaV6yLpsWtQtZ52SWvYuMiKxdGKXtLvNdTUXv2Ysoo5Bkv0tFrrikj9ddDh2RkeSFXel+kvJ+oIgUHm/+2f2rjx4+3DPyyGARieIRIeHT5z0QCUOh32nVG51Wvdxp1bNwo5POwU3CrZugFIaIJGMk9ixsEjIrpwX2KDKGgyLTf6LcxhZUOBnpFCYh3Aati0j8FwXb19YURRsnfbzugkSFjFiZdJs2O+n/7aP3UDt7yTXiLLvRa2cv7YhkkfLmD7euPnr06J2JiQkAwAQAv0S0144S89QAABqfSURBVO/e+zWG4hEhoxlmsk4XcwgRlY5dF250QE20z6wQBrxXJuYiXsvlS12FK8kyRqKNxnwXwAJ7AomABtxk+UEpIuT8mpLCSXPM9y4F+I65XL6UjWAruA7RRxyviSn0Fdj2JvOsgARQRFJau+/dvfro4cN3JiYmRhKNdv+usYhE8YgQMq6hTadVQ/YQlIriFdczawinqa9Bu7UNGSeLOZDIOFQhJyA5CP+AFhnhpDHme5ckyqhzPQygTkCScuoTPj6T8ZCxby4nvfJSw/6T29nkybx35+qDB/cPzHlk4HY2ikeEROvgN1kLJML25uVPKsDNn3QO0SfjTgPK5hmKHuocFOZAImONJZDLfxfFNragwsnGOFFBnVZdRmAJ1W9RsH2toVDsT2xeGl+fIUR7Unv9gSJScL71p7evPrh3z815hPFFI41FJIpHhNCBJclxAPudVr3mS8Z9DtGdPrKoKERcxiGx0Zing0KiRNZmDC2JdITb1zyCCvFhC2nFmJ/xM/fKLkOI/qT2+yNFpPH55n+6efXBva1nI4/sEJEoHhESvQNLiBb4xKQC3ETcq3C3LujsfMrS5ZMnJNY+XA6xbMWI70vXKCSZeugxSpqQxFFIHfQOikij88YPBlfvb7niEXaLQGaLSBSPCCGEANjZ5uYAyAK4gPCEpEwIp7IRQqIbK/qQ2wKbyeVLyqN4c/nSLILnJBqIk9XGpSlR5FDGQTG+Sm1fYysnJHmkRnkTRaSDef1P+lfv3737zl5CkMEiEsUjQgghQ53DTqtegSskXQnpa8qsaW3gdlwSBFkb0gmhTFElz/aPl10EzwkVipAG+e1rVTZvQpJHatQ3UkTam298/8bVe3fuvHOQEGSgiETxiBBCyEGOUb/TqpcBvAW5pLnDmAvJcSLjk2YVkADjQwNyUYph5EGSuWZT4rPabGMTUViLEpfYYNJnYiIRJOe3ntQ4b6aI9Dyv/fHXV+/duf3OqEKQQSISxSNCCCHjOIrtTqs+Dzc/kkoc1q4WrLMKSEBkhBOl0TcKhJNGTJ9VLaQx+ogk1VbpshbkSI37AYpIT3n1P/7u6tbtW++MKwQZICJRPCKEEBLUOHMAvKvwkgXWKiFGIys2OArLIiOcrMkcWS9yJ/UCflz1NjZZAYn5jwhJKKkgH6KIBLz67ldXt27deieI8KO5iETxiBBCiBSdVr0KN8G2CuZiCjnP8kkSomQ8kBFOALXRN5HnP9qFjI3tqKgABVFYUkIaIcRsUkE/mGQR6eXzX169c/PmOzLCj6YiEsUjQtRDI4sk1WmsQO4EJj9x5EHKWvhYZtkySUzIRCEpib6RFE4GnVZdhY0scw1VQloxxnsghBhOSubDSRSRXv7eb6/evTkIHHmksYhE8YiQcGjLfFgYvISYigO5BLoeQZ3HJh+BknokRBbZ6B1HQRnijj5ScRpbMeZ6GIjE6GHAPGuEGEBK9gJJEpFe+g+fX7096EtHHmkoIlE8IoQOX5hk+RiTidjmUDW0HxQsfCQygnSTLZpIjAVdSYFAhXBSlvisStGkFlc9KNi+pqu/YPx4ncuXCiBRscEqCM6kiot89B5qZy8BAK5ZVj/Xzl5y7+/FP/rs6p3B4B1MTOz8cQKAX7aR+X0CwLbvP4Jea8JXvhGheEQICZssqyDRVAEsS14jqPDRjeE7dYYRSCROagAWAn42k8uX5kU+pSDOeRbAXMDvVh110wBwOeBnZYU0bl8jRC69xAWxRT+xpFRdyOZIpFfKX/79rRs3lEceaRCJRPGIkJDptOpNOnwk4X2gD/lcSEGdzq7Ed85Z+DhkxpM2WzORpAG5La2OxGdlhBOltrKIxgo6JqYlt7HJfLYXVMCLYIzJsnuRiGyDQtIrL6XyYraKSEdPnPz9VCoVimgUo4hE8YgQM7AhCmKBjzHxNA00Eq3aUiAiMNISl+CBAEQKISbLRPLIiB+OxGfDsJcjrwcF29eqITcRmTEmY0EXKXCUMMI2SPzCbkr1BW0UkaYPH8ar2TdhkYhE8YiQaJHZa220QcEk4EQQS/SKWOmXwSZDcV6yLptsxkQBMsJJJoioK7l9LayomziEtGKMZQ7bqbdB8M9yeDDCJkmLMSWxpMK4qK0i0guvvPq80GOeiETxiJDokVlVM32S4hY8ImusySKTuLdg0TOQuZcemzBRgcglJNOenACf0Wb7mq8e+gBWJRzYYkR1tzOOKhDkD0L2+rSXSFRtrZDkykuFdWEbRaTjp04h/dJLJotIFI+SKUCQ+GlKfDZj+EpHgY+fCGcpLtpsv9JONPMfEZVEHX3jSHxfzYZ6EHbEgqb1oGqcMV2AmePQEJlNItvWikmuv1SYF7dRRDr18iuYOXrURBFpheKR0dB4N5tugo2iAh8/MXj8lE1YqwXCeczEVIeE7KYaVZ/M5UvzEo75RphRNyIaK2hS8aUxt4jLjGMDhL99zVtokIlOM9besCnfnkHIRCcvJjlFQyrsL7BRRHrp9TcwkUqZIyK54tEfcJyIFYal0oGVwUgHVkyuTKBN4qaZxP63CyfmOiTELxR0IZcbsBhR269FUB0NA+qhEWEUaVfis3MGO/VFjgy0zU0hFcWX2CYiTU5PY/all4cLPZqJSJiYWOn8cILiUfwwkXCyjWXZSapAg4iYTJzbMIWzKrOqXbRgpdGRrMMmWzFRTC2iuUW7/Ee7qIZdD5JJxIEIoo98yI41ptodtJeiR7atlZNacamovsg2ESn94ouYmpnRWkRKTUysfPyjFMUjPZCNwqDxbj4yobIZEYafKKeVWEXWYEMxbXJbFtt9ZLavrbH5khCoyfTJUbaxiXkzaNtfiyLqRiwwBRW4R91GIyNO9MRWO1OceuOEGLF9LcMhwSi7AHAj3gpJrLhUlF9mm4h0+rVv7C30xCwiTaRSKx8vT1I80mNi4PY1omKiKhvW7rPg9jXyFNlxcF3y840k9T/FZW+w+RLVCHFGRpwcRShwDGn3DdbDDrIR2ybmpnE4IsQ2BsnaFpUk1l0q6i+0SUQ6cvw4Dh89pp2IdOjQoZVfVKYoHulDQcEg12Q1Go/sMzRtG02Fj5yoHAclx1CZZLWAGwVonJEvVkcZAUt0pSYzJyp6z140bKgHBdvXqlE2COHUb0hexpixWjyfJQ4FsSHbzxdsOGhjXFJxfKlNItKpV17ZX+iJWERKTU6u/OLCNMUjvZCdyHqsQvNRIAKmYUhoNg0iMoSCBiKGrKFYNXBluyL5+bUwT6EisfUnXeZFGWF3321sktvXViNMGu1tYwsqmhwUcSNjN2zE1P+TFDFaAYkTFUJxNWknsqXi+mJbRKQjx4/jyLFjWohIk5OTK59cnKF4pJcjXYDcyg/A45NtQjaXiCmGRpWPemcMyLIOSg5cAVQGFU5MTfLzaZOM/Vy+VIZ89BG3r+mJTVvjw9q+VTas3cuMT07Av4U9ZsZV/0ZEjAofgYttMSIEUlnbPBNjX4mFVJxfbouIdPzUCwcLPSGLSJNTUyuf/OQIxSP9ULEKQgGJhrLfKNLagRUrwot81E+N91y+1DVx+5NCVLRZ6XFQRAHKRnSeNyFpphAuZet9AApIYSLTptMWJW8N6xSyoJE3g4iTRquwD5x9xgGZRcxYnGLJxOI77cqAqBAuttlhmwNuJGBiTmVLxV0AG0Skky+8gIlUKjYRaWp6eqV76SjFI/0M+IIiR7rJ2uQk5aOsa1SLKFeNj/k5MgCuCSGpnKRQZyF4yp4uMxAOhQoqKvqxAc+wAfmor1qU23gSiGzdOjZUgqRYMHQbm/i/tETfiaMeugie0HduD7tAZvvaWsz9X/Y5aB0xmsuXqpDfoUDU9L0a1KQLuZyUxcKUDoWwQUQ6djI9WrSQ4t+npmdWepeOUTzSb2KYVeVIM4G2VZNUH8CqAqOopmmbV+G02kwGwGUA3Vy+VLP9hEZxf8sKLqVyDJRNpu31waauIlIuX6opcky4Oh7ufCDbrpcsGkNURyEVDW33NcX14MRUlrjrwkPLiFEhMpznKKgVqtr7tSSISCldCmK6iHQsnR59y5mqyKOZmZVf/dfjFI/0HYgyCq6zxqrkJDWEBeEk6kQDXE0bR4BYAvChLyopa9MNCse2qbBtqXLa+4ocxDloKLCIiC8VOTVWmTw7EmRXvWuW1INMH18aIuYGFZB6CqMdo64HZ9dYkJWYk+Paxucfq2USiz9TpzrNr0JcuMahTzuqkF9c8rBeRErpVBiTRaTjs7Pj5S2S/H368OGVX//5SYpH+hnvs8KxV5UDhvknLENRHhbPaHY0afNNyCfrTSpeVNInuXypbYOYJFZ8m1AXjaZ6HFRlKC7l8iVttrOJLRHLii5XYdeMhKbk5+c0XEwIMi92EXz7FuATjEzcvuarhz6CLxzu3sZmWhLxvcZqWdLQZNsxxSOtx6C+4nnvmog0tzJlQUq3ApksIh05fiISEWn6yJGV3/w0TfFotMG6GJUz5ltxV3miAgUkO1E1SV2LM2mf6FtNUDxSxRyeFZOqJiXKFWJiBcAHUCceKT9OW7GhuAh3O1s25nqvQd2WiCuMPoqMpoJraCVkSlCT+Gxxj5+jLIMOdp+qetAiulJhbpo5DcbpMigeaU2nVa8qam87YzOAtskHHuy1TTqlY2FNFZGOnjgOAKGKSDNHjq58+t9mKR6NTlk4Y41cvuSEMXnk8qWscJo+hNotPKtMYGrtJKXKKALcpH2Rr3KIVd42uG0tLOaEIPBBLl/azuVLzVy+VNHVEBErq22oi4AJ1aEThuKGwmfVHpbMNyLjrgl1CxcDMPrIFLHAz6Jog05C62LRNwcG7YcbMW9f89sHQSMkHd+4EDSNQk+HeghhDpiLw5n3RWlf5nBnBKrH0Iyw45qmCEki+KKWy5f23PI/qWvhP3oPtbOXABik1h45fgLA5wBcEcljAsC2733+3/f72+7fDx87vvLZz05RPApuXC2KjtETBncTQDdIIkthqBTFK6wjy2t8bFZTUTi+LQEo5PIlJ+yk676T1hh1FC0L4rWcy5cgxI+2/xW14CycFEe8wkievh5ye3bgCv8qSAN4P5cvrQNwwo7gEXNQGeoFO4cLF5GKBf1cvrSmyI7wTnuswBVjaqMIAWJMzwIoAJgXdlE5prpYRXAxtCjGxqBjkU42VyNgPcz5xuWg6JbbrSruR0Ve0bRw5q8AqIQ91om+WAYPFzFpTG6K9qE6yfmCaHvrAKpx5xgbMgcUhE9bGKW9Tur8EE0TkaZmZp75XaWIdPj48ZXP//sLFI/UkBET85LoOIC72uMZWns5LLPCuMoqmsjidJxI/JNUTdER5/527U1OFdXtR6ycOAGN2nVQcFLNnHgt+Z6RN4614R4RvvOvrKEsBIt58SqMamRIUgm5D7Zz+dIFxSLMAtyo11VhJLYV90NPOArDKVnTyahNEA2oXYjKCOfnvE9s7u9h08ztMV6bJpwAclu2vO/WqU0ErQdHsi60GgOEsFhR7AueB+CIvHFVlUKSGKMdMUaPa9/RVtKDiuhDYfh6C3APwumJvtaI2t8TIrPflhv7Pid1f4ImiUhT09PP/Z8KEenoiRMrX/zlixSPwiXtG7R1GLx5fHIycODmi1E9OX2Qy5c24K6oNoJGQ4hJphDQENpxSoWQQaMounFsYciz3Ms59IQmP/PCudzPyQybSET0TqteEVvPVN/jEtzcNF4/bAYVkyKKeB1Afeg+Ga0Nql5M2M2cQXXREI5VkLqQ6RvrOuX9kqwHB8HF5XUd85+JPlJW3JbTcBcPyrl8yXPkA4lnvjG6ALntxGWoi4olwdtbX9gFYT6L3UL/OtwAhjbcKFDpxSdhw/uDH+ZV2eKTJjxIk0SkmSNHcH9r65n/kxGRjpw4ufLF5ZcoHiWLda4CJ2aSaircvjDMabgMN0dSD08jU7riNQxvsimIn2UjHAbCIKJjqg8Lih0vG8QML59XOsR+6I8Qa2K4cOex2+CLQgAocutarFTBHCkeDajfPnIQNYvqIW1ZPXg4ITn0aTwV/D1H3ovebUY4Rl8RUbEcAfSwz9u5fOlchNrDM4t/oh30fPb6frZ7Vrz2s/OUMmnKgzRFREodGl6lQUSkYyfTK19eeZniUfIoswoShSMmhTC3A2XEK2qhoNpp1bs0iMiYVKJcBRdttAj10YDDHJUF6BeNd45bpmN3VqoiwiLD2kAN0QtIDdYDBtD45N+Qthwf5MgvR3R7PfDwAh3bXE1E8ZyPqQgZ35ygld2QMulBmno6m8c4p7MdO3ly5cu/eoXiUfK4oNnpFyT8CaoP+dwNOrLeadVpEJFxWRUnpEXdD5sm2xeS9V1js9MCh1XgCgVQd0LiKKzpGH0n6qEX4Vc2dI9CFDbFho19nxGg2ra5MoBV1sSzpEwrsO4i0tTM9L5/H0VEOpZOr3z189coHiWPDTrciZ2gmgAuWHRLA9gpipGQx0DEGIEphJQkiUirnVbdYbPTah64wpoAEO1WqprG9RClmG5K6oSCsDFs4QIjQLUfmx1QRHqGlImF1llEGpZIezf7iUjHZ2dXfvc/vkHxKHkMxKRIkjtBVSyaoApcTSNjsqFDu0mQiETxSM95oAw7IyzGpRaV7aV5zsmoytYzJfemmCMKsENEWuXCsTFjswO7FnqlSJlacF1FpIcPHoz0vmEi0vHZUyvX//p1ikfJY0CHm/gmKNOdh3PchknGRAvxyNcPtbQvFDstDpudthSQcBFJjAVrEXxVQ/N66EbUFhqGtY82zM8XugHmPDVtXKoI22CQ9LpImVx4HUWkh/cfjPxev4h04tSpla//5xsUj5KHJx7R4SY2OA/nmE9lqGG+zmrYk3VoKKCLdvyWhYbiOYpH2jspfVBE8sZOG75Dlpol3xHGGG2q0K/VogkZu90lfnxOmX4DNiTWPvHCCys3/vZbFI+SRw8Uj8gQ56HTqs/DrO1sAwDfpXg09Hm2O616AcDb4B763VzotOraGtFibM7CDgGwB+At9lFz5gHhpKwnuA5qCFfANWXbVth9dsNUO1S0kbdhltC/CopHNth180jwlraUDTdhsoiUPv3iSv/vMhSPksc6gHmKR2SfCcoxZHLyhNAGn9q+z7MpnumboJDUA/C2CbkfhKBbEH3R1GikNc43Ro4Z/raXVBqGXltpO0C42/lqps+tMCci5EKnVeeJa/aM0RW4kcqJE/pTttyILiLS1u1bI783ffrFlf7/oniUMAYA3tV51Z1oNznpvLq2Ssd07GfaFULSKQDvItpjmnUY/y50WvWsaafOiL44b5ih6Al1Rc43dFIMJcxTyGoG1UOD9bBvH2nDFZF0XZwxZtGEjN/2hND/3STZcymbbiZuEenJ48cjv5fiUSJZBZDttOpVVgUZY3Jqwt1Go9Pxzp4xxJW04M+132nVq51WPYun29tsTcw4gBtFkTXZgBbiX0E8r3XN6/uciUIdOdBJ0b3thSEMhOGU9Qxb+GiEND+s2TKHiznV0dCRvwJ3oY1jsd1jVUPYc+csGaM9u6047I+Ttj3Aj95D7ewlAMC1qL/73t27I72P4lGklAE4cFcm5mLqgDUAVXGaBiGBDCMA5Vy+VIO7IrsQU1F6ACrMo6L8+TYBNAEgly8VxYRdAJAx/NY2RHtt2CQ0elsmcvlSAUAlxv7I/pnMsaKQy5fmhW1TtGCcOIgagGXF16wa9tz7uXypAWBJ8aUbFvaRRi5fagr7vwwgHVNRVsV4TNs/WWN0DUBNjNFlMUanDbqFNWGz7WtHTNr48OISkUbZvkbxKPKOvHPUZy5fygqnrAB3K0JYglJPOIMN5oUhIbRnz3F1QjAm9xUC6JhGY/x6Rr0wQAq+lwlGyIYY/2q2b230OfNZn6EYtTM/EO2lxhXuRNo2Zd84MS9h26wDaIu+q1s7qkG9gGSibaZaQBrYOqeLBYtKLl+qClupHNHYzEVj4h+jHWHLeQuDOopJA89nxRiLfZO2Prg4RKS7t27v+3eKR7F35q4Y2HcmTOGIZ8VrHsCseI1qgHlhik0AXQBNgyaNpoXl6iakLTcBNHP5Utk3KS2GIATUxITS5TONzQBpQ6yWC6Fi3vfKIp7Iyt3tZMfxTKLRLO7Z78x7EWRhRSb1hLHXtGyRohnTZ20ZJ+CzbTy7xsOzb/q73tvWPTqw06p3c/nSu6L8KuibOE6JyBqVCdW7CegbfTF/VkOM2hv4nG8V4/EFTZ9pkpP5S/ddDF8YnEf0i06ezdYWNkSghb6J7e1tqx/a2UtwEJGI1Pl//3fPv1E8IoSEjRBECz5nYRQHdiAmkr5PCGgzt5FRz9173n4RfN73FlkhY0O0D6+NdAF0GfEycp/0xD7v+Ywq+vW8uhYv9k1CCJEfl7N4NmovO6Ijv+GbB9tiPOYhIkSmLc762qHfjhu1Te5lNwBPF1aacIVzZW3VegEJiEZEut3v47Nf/mLo3ygeEUI0EhkgnP8ua4VtAs+v6rNtRO/IZL3fKcoRQogWDj3HZKK7zRabvZYIAQkIX0T6otfFzevXn/t/ikeEEEIIIYQQQggxnVRSbvSj91CDe7ReKNzuPx9RTvGIEEIIIYQQQgghNpBK0s2GJSLdvH4dTx4/fub/KB4RQgghhBBCCCHEFlJJu+EwRKTBrq1rFI8IIYQQQgghhBBiE6kk3rRKEenurVvYun1r53eKR4QQQgghhBBCCLGNVFJvXJWIdP3zz3d+pnhECCGEEEIIIYQQG0kl+eZlRSR/9BHFI0IIIYQQQgghhNhKKukVICMiedFHFI8IIYQQQgghhBBiMylWQTAR6caXX2Lr9i2KR4QQQgghhBBCCLEeCkiCcUSkhw8e4Prnn1E8IoQQQgghhBBCSCKY2N7eZi34OHsJDoBr+73n150OpmdmKB4RQgghhBBCCCEkEVBAGsJ+ItL1zz/DowcPKR4RQgghhBBCCCEkMXAL2xD22s528/p1ikeEEEIIIYQQQghJHBSQ9mC3iHR/6y7u39v6OcUjQgghhBBCCCGEJA0KSPvgiUj3t+7i5tdf//zrv3nje6wVQgghhBBCCCGEJA3mQBqB0//u039x/W9e/3vWBCGEEEIIIYQQQpLI/wdt3PYQPylangAAAABJRU5ErkJggg=="/>
    </svg>  
  );
};

export default JiraSvg;