import { Container } from "./styles";

export function Button({title, className, onClick, ...rest}){
  return(
    <Container type="button" className={className} onClick={onClick} {...rest}>
      {title}
    </Container>
  )
}