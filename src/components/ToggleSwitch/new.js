import styled from 'styled-components'

export const Tog = styled.div`
> input + label {
  padding: 2px;
  width: 100px;
  height: 30px;
  background-color: #dddddd;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  border-radius: 30px;
}
> input + label:before, > input + label:after {
  display: block;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  content: "";
}
> input + label:before {
  right: 1px;
  background-color: #f1f1f1;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -ms-border-radius: 30px;
  -o-border-radius: 30px;
  border-radius: 30px;
  -webkit-transition: background 0.4s;
  -moz-transition: background 0.4s;
  -o-transition: background 0.4s;
  transition: background 0.4s;
}
> input + label:after {
  width: 40px;
  background-color: #fff;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  -ms-border-radius: 100%;
  -o-border-radius: 100%;
  border-radius: 100%;
  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  -webkit-transition: margin 0.4s;
  -moz-transition: margin 0.4s;
  -o-transition: margin 0.4s;
  transition: margin 0.4s;
}
> input:checked + label:before {
  background-color: #8ce196;
}
> input:checked + label:after {
  margin-left: 60px;
}

> input {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}
> input + label {
  display: block;
  position: relative;
  cursor: pointer;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
`
