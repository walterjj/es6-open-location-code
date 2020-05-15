import { expect } from 'chai';
import 'mocha';
import OpenLocationCode from "../src/open-location-code";
import dataset from "./data/encoding";

class TestData {
  constructor(parts) {
    this.latitude = Number.parseFloat(parts[0]);
    this.longitude = Number.parseFloat(parts[1]);
    this.codeLength = Number.parseFloat(parts[2]);
    this.code = parts[3];
  }
}

describe('Encoding Tests', () => {
  const testDataList= dataset.map(data => new TestData(data));

  it('testEncode', () => {
    expect(testDataList.length).to.greaterThan(1);

    testDataList.forEach(testData => {
      expect(testData.code).to.equal(OpenLocationCode.encode(testData.latitude, testData.longitude, testData.codeLength));
    });
  });
});
