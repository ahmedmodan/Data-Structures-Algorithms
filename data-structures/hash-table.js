class hashTable {
  constructor(buckets = 8) {
    this.storage = [];
    this.buckets = buckets;
    this.size = 0;
  }

  resize(newSize) {
    this.buckets = newSize;
    const oldStorage = this.storage;
    this.storage = [];
    oldStorage.forEach(bucket => {
      bucket.forEach(pair => {
        this.size--;
        this.insert(pair[0], pair[1])
      })
    })
  }

  hash(str, __, buckets = this.buckets) {
    var hash = 5381;
    for (let i = 0; i < str.length; i++) {
      let char = str.charCodeAt(i);
      hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return hash % buckets;
  }

  insert(key, value) {
    const index = this.hash(key);
    const bucket = this.storage[index];
    if (Array.isArray(bucket)) {
      const indexInBucket = this.findIndexInBucket(index, key);
      if (indexInBucket !== null) {
        bucket[indexInBucket][1] = value;
      } else {
        bucket.push([key, value]);
      }
    } else {
      this.storage[index] = [[key, value]]
    }
    this.size++;
    if (this.size >= (this.buckets * .75)) {
      this.resize(this.buckets * 2);
    }
  }

  delete(key) {
    const index = this.hash(key);
    const bucket = this.storage[index];
    let val = null;
    if (bucket) {
      const indexInBucket = this.findIndexInBucket(index, key);
      val = bucket.splice(indexInBucket, 1)[0];
      this.size--;
    }
    if (this.size <= this.buckets * .25 && this.buckets > 8) {
      this.resize(this.buckets / 2)
    }
    return val;
  }

  retrieve(key) {
    const index = this.hash(key);
    const bucket = this.storage[index];
    if (bucket) {
      const indexInBucket = this.findIndexInBucket(index, key)
      if (indexInBucket !== null) {
        return bucket[indexInBucket][1];
      }
    }
    return null;
  }

  findIndexInBucket(bucketIndex, key) {
    const bucket = this.storage[bucketIndex];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) return i;
    }
    return null;
  }

}