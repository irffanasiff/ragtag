import {
  Bought,
  Created,
  Rent,
  Resell,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/Gumroad/Gumroad"
import { User } from "../generated/schema"


export function handleBought(event: Bought): void {
  let report = User.load(event.params.id.toString())

  if(!report) {
    report = new User(event.params.id.toString())
  }

  report.tokenId = event.params.tokenId;
  report.creator = event.params.creator;
  report.address = event.params.buyer;
  report.save()

}

export function handleCreated(event: Created): void {
  let report = User.load(event.params.id.toString())

  if(!report) {
    report = new User(event.params.id.toString())
  }

  report.tokenId = event.params.tokenId;
  report.address = event.params.creator;
  report.tokenURI = event.params.tokenURI;
  report.price = event.params.price;
  report.tokenAddress = event.params.tokenAddress;
  report.supply = event.params.supply;
  report.rentable = event.params.rentable;
  report.rentPrice = event.params.rentPrice;
  report.save()
}

export function handleRent(event: Rent): void {
  let report = User.load(event.params.id.toString())

  if(!report) {
    report = new User(event.params.id.toString())
  }

  report.tokenId = event.params.tokenId;
  report.address = event.params.renter;
  report.rentTime = event.params.rentTime;
  report.tokenURI = event.params.tokenURI;  

  report.save()
}

export function handleResell(event: Resell): void {
  let report = User.load(event.params.id.toString())

  if(!report) {
    report = new User(event.params.id.toString())
  }

  report.tokenId = event.params.tokenId;
  report.creator = event.params.creator;
  report.address = event.params.seller;
  report.tokenURI = event.params.tokenURI;


  report.save()
}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}

