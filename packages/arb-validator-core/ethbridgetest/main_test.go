/*
 * Copyright 2020, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//go:generate ./abigen.sh

package ethbridgetest

import (
	"log"
	"os"
	"testing"

	"github.com/offchainlabs/arbitrum/packages/arb-validator-core/test"
)

var tester *MessageTester
var valueTester *ValueTester
var protocolTester *ProtocolTester

func TestMain(m *testing.M) {
	client, auths := test.SimulatedBackend()
	auth := auths[0]
	_, _, deployedMessageTester, err := DeployMessageTester(
		auth,
		client,
	)
	if err != nil {
		log.Fatal(err)
	}

	_, _, deployedValueTester, err := DeployValueTester(
		auth,
		client,
	)
	if err != nil {
		log.Fatal(err)
	}


	client.Commit()

	tester = deployedMessageTester
	valueTester = deployedValueTester

	code := m.Run()
	os.Exit(code)
}
