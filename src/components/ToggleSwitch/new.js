import styled from 'styled-components'

export const Tog = styled.div`
	> input + label {
		position: relative;
		display: inline-block;
		width: 108px;
		height: 44px;
		display: inline-block;
		cursor: pointer;
		outline: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

> input + label:before, input + label:after {
  display: inline-block;
  position: absolute;
  top: 4px;
  left: 4px;
  bottom: 4px;
  content: "";
}
> input + label:before {
  right: 1px;
  background-color: #ccc;
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
  -webkit-transition: margin 0.4s;
  -moz-transition: margin 0.4s;
  -o-transition: margin 0.4s;
  transition: margin 0.4s;
}
> input:checked + label:before {
  background-color: #3B97D3;
}
> input:checked + label:after {
  margin-left: 60px;
}

> input {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

`

export const Tog2 = styled.div`
	> input + label {
		position: relative;
		display: inline-block;
		width: 108px;
		height: 44px;
		display: inline-block;
		cursor: pointer;
		outline: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

> input + label:before, input + label:after {
  display: inline-block;
  position: absolute;
  top: 4px;
  left: 4px;
  bottom: 4px;
  content: "";
}
> input + label:before {
  right: 1px;
  background-color: #ccc;
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
  -webkit-transition: margin 0.4s;
  -moz-transition: margin 0.4s;
  -o-transition: margin 0.4s;
  transition: margin 0.4s;
}
> input:checked + label:before {
  background-color: #3B97D3;
}
> input:checked + label:after {
  margin-left: 60px;
}

> input {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

`

export const Tog3 = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;

  > input {
    display: none;
  }

  >.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 4px;
  }

  >.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 4px;
  }

  > input:checked + .slider {
    background-color: #3B97D3;
  }

  > input:focus + .slider {
    box-shadow: 0 0 1px #3B97D3;
  }

  > input:checked + .slider:before {
    transform: translateX(56px);
  }

  > .slider.round {
    border-radius: 34px;
  }

  > .slider.round:before {
    border-radius: 50%;
  }
`
