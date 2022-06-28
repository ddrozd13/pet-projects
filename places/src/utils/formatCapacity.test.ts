import formatCapacity from './formatCapacity'

describe('formatCapacity', () => {
  it('return string in singular when passed capacity is "1"', () => {
    const result = formatCapacity(1);

    expect(result).toBe('1 person')
  })

  it('return string in  plural when passed capacity is "3"', () => {
    const result = formatCapacity(3);

    expect(result).toBe('3 people')
  })
})