import styled from 'styled-components'

const MainSection = (props) => {
    const {title} = props
  return (
    <Wrapper>
        <div  className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <div className='info-data'>
                        <p>Welcome to</p>
                        <h2>Ayushi Store {title} Page</h2>
                    </div>
                
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
`

export default MainSection